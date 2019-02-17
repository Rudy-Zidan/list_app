<template>
  <v-card height="200px" flat>
    <div class="headline text-xs-center pa-5">
      <lists v-if="bottomNav === 'lists'" class="mb-5"></lists>
      <items v-else class="mb-5"></items>
    </div>
    <v-bottom-nav :active.sync="bottomNav" :value="true" fixed>
      <v-btn
        color="blue"
        flat
        value="lists"
        :loading="$wait.is('loading trash lists')"
      >
        <span>Lists</span>
        <v-icon>list</v-icon>
      </v-btn>

      <v-btn
        color="blue"
        flat
        value="items"
        :loading="$wait.is('loading trash items')"
      >
        <span>Items</span>
        <v-icon>menu</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
import Lists from "@/components/trash/List";
import Items from "@/components/trash/Item";

export default {
  name: "Trash",
  components: {
    Lists,
    Items
  },
  data() {
    return {
      bottomNav: "lists"
    };
  }
};
</script>
