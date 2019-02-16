<template>
  <div class="lists">
    <h1>This is Lists page</h1>
  </div>
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
    }
  }
};
</script>
