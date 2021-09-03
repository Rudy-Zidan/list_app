<template>
  <v-card>
    <v-list v-if="items.length > 0" three-line>
      <v-list-tile v-for="item in items" :key="item.id">
        <v-list-tile-action>
          <v-btn
            round
            flat
            color="red"
            class="item-destroy"
            @click="deleteItem(item.id)"
            :loading="$wait.is('loading delete item' + item.id)"
            >Delete</v-btn
          >
        </v-list-tile-action>

        <v-list-tile-content class="ml-2">
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
          <v-list-tile-title v-text="item.description"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn
            round
            flat
            color="green"
            class="item-destroy"
            @click="restoreItem(item.id)"
            :loading="$wait.is('loading restore item' + item.id)"
            >Restore</v-btn
          >
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <p v-else class="pa-5">No destroyed items</p>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ItemsInTrash",
  computed: mapGetters({
    items: "getItemsInTrash"
  }),
  created() {
    this.fetchItemsInTrash();
  },
  methods: {
    fetchItemsInTrash() {
      this.$store.dispatch("fetchItemsInTrash");
    },
    deleteItem(id) {
      this.$store.dispatch("deleteItem", id);
    },
    restoreItem(id) {
      this.$store.dispatch("restoreItem", id);
    }
  }
};
</script>
