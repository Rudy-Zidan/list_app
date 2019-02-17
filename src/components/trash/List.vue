<template>
  <v-card>
    <v-list>
      <v-list-tile v-for="list in lists" :key="list.id" @click="">
        <v-list-tile-action>
          <v-btn
            round
            flat
            color="red"
            class="item-destroy"
            @click="deleteList(list.id)"
            >Delete</v-btn
          >
        </v-list-tile-action>

        <v-list-tile-content class="ml-2">
          <v-list-tile-title v-text="list.name"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn
            round
            flat
            color="green"
            class="item-destroy"
            @click="destroyList(list.id)"
            >Restore</v-btn
          >
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ListsInTrash",
  computed: mapGetters({
    lists: "getListsInTrash"
  }),
  created() {
    this.fetchListsInTrash();
  },
  methods: {
    fetchListsInTrash() {
      this.$store.dispatch("fetchListsInTrash");
    },
    deleteList() {
      this.$store.dispatch("deleteList");
    }
  }
};
</script>
