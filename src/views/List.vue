<template>
  <v-container fluid class="lists">
    <v-card>
      <v-layout row>
        <v-flex xs6></v-flex>
        <v-flex xs6>
          <v-btn round flat color="green" class="create-list" to="/lists"
            >Create a list</v-btn
          >
        </v-flex>
      </v-layout>
      <v-list subheader three-line v-for="(list, i) in lists" :key="i">
        <v-layout row>
          <v-flex xs6>
            <v-subheader large>{{ list.name }} </v-subheader>
          </v-flex>
          <v-flex xs6>
            <v-btn
              round
              flat
              color="red"
              class="item-destroy"
              @click="destroyList(list.id)"
              :loading="$wait.is('loading destroy list' + list.id)"
              >Destroy</v-btn
            >
            <v-btn
              round
              flat
              color="blue"
              class="create-list"
              :to="'/lists/' + list.id"
              >Edit</v-btn
            >
          </v-flex>
        </v-layout>

        <v-list-tile v-for="(item, j) in list.active_items" :key="j">
          <v-list-tile-action>
            <v-btn
              round
              flat
              color="red"
              @click="destroyItem(item.id)"
              :loading="$wait.is('loading destroy item' + item.id)"
              >Destroy</v-btn
            >
          </v-list-tile-action>
          <v-list-tile-content class="ml-2">
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ item.description }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "List",
  computed: mapGetters({
    lists: "getLists"
  }),
  created() {
    this.fetchLists();
  },
  methods: {
    fetchLists() {
      this.$store.dispatch("fetchLists");
    },
    destroyList(id) {
      this.$store.dispatch("destroyList", id);
    },
    destroyItem(id) {
      this.$store.dispatch("destroyItemFromList", id);
    }
  }
};
</script>

<style>
.item-destroy,
.create-list {
  float: right;
}
</style>
