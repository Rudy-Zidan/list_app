<template>
  <v-container>
    <v-form v-model="valid" ref="form">
      <v-container>
        <v-text-field
          v-model="list.name"
          :rules="nameRules"
          label="List name"
          required
        ></v-text-field>
        <v-list subheader three-line>
          <v-layout row>
            <v-flex xs6>
              <v-subheader large>Items</v-subheader>
            </v-flex>
            <v-flex xs6>
              <v-btn
                round
                flat
                color="green"
                class="item-destroy"
                @click="addItem()"
                >New</v-btn
              >
            </v-flex>
          </v-layout>
          <v-list-tile v-for="(item, j) in list.items" :key="j">
            <v-list-tile-action>
              <v-btn
                round
                flat
                color="red"
                class="item-destroy"
                @click="removeItem(j)"
                v-if="item.id === undefined"
                >Remove</v-btn
              >
              <v-btn
                round
                flat
                color="red"
                class="item-destroy"
                @click="deleteItem(item.id)"
                v-else-if="item.deleted_at !== null"
                >Delete</v-btn>
              <v-btn
                round
                flat
                color="red"
                class="item-destroy"
                @click="destroyItem(item.id)"
                v-else-if="item.id !== undefined"
                >Destroy</v-btn
              >
            </v-list-tile-action>
              <v-layout row class="ml-2">
                <v-flex lg6>
                  <v-text-field
                    v-model="item.title"
                    :rules="titleRules"
                    label="Title"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex lg6>
                  <v-text-field
                    v-model="item.description"
                    label="Description"
                  ></v-text-field>
                </v-flex>
              </v-layout>
          </v-list-tile>
        </v-list>
        <v-btn @click="submit" flat round color="green">{{this.submitBtnName}}</v-btn>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Form",
  data() {
    return {
      valid: false,
      submitBtnName: "",
      nameRules: [
        v => !!v || "Name is required"
      ],
      titleRules: [
        v => !!v || "Title is required"
      ]
    };
  },
  computed: mapGetters({
    list: "getList"
  }),
  watch: {
    list: function(value, old) {
      if(this.$route.params.id === undefined) {
        this.redirectToList(value);
      }
    }
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      if (this.$route.params.id !== undefined) {
        this.submitBtnName = "Update";
        this.loadList();
      } else {
        this.submitBtnName = "Create";
      }
    },
    addItem() {
      this.list.items.push({ title: "", descritpion: "" });
    },
    removeItem(index) {
      this.list.items = this.list.items.filter((item, i) => {
        return i !== index;
      });
    },
    submit() {
      this.$refs.form.validate();
      if(this.list.id !== undefined) {
        this.update();
      } else {
        this.create();
      }
    },
    destroyItem(id) {
      this.$store.dispatch("destroyItemFromList", id);
    },
    deleteItem(id) {
      this.$store.dispatch("deleteItem", id);
    },
    create() {
      this.$store.dispatch("createList", this.list);
    },
    update() {
      this.$store.dispatch("updateList", this.list);
    },
    loadList() {
      this.$store.dispatch("fetchList", this.$route.params.id);
    },
    redirectToList(data) {
      this.$router.push("/");
    }
  }
};
</script>
