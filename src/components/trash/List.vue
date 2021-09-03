<template>
  <v-card>
    <v-list v-if="lists.length > 0">
      <v-list-tile v-for="list in lists" :key="list.id">
        <v-list-tile-action>
          <v-btn
            round
            flat
            color="red"
            class="item-destroy"
            @click="deleteList(list.id)"
            :loading="$wait.is('loading delete list' + list.id)"
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
            @click="restoreList(list.id)"
            :loading="$wait.is('loading restore list' + list.id)"
            >Restore</v-btn
          >
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <p v-else class="pa-5">No destroyed lists</p>
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
    deleteList(id) {
      this.$store.dispatch("deleteList", id);
    },
    restoreList(id) {
      this.$store.dispatch("restoreList", id);
    }
  }
};
</script>
