<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>List App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        round
        v-for="(link, index) in links"
        :to="link.url"
        :key="index"
        :loading="$wait.is('loading ' + link.short)"
      >
        <span class="mr-2">{{ link.name }}</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        { name: "Lists", url: "/", short: "lists" },
        { name: "Trash", url: "/trash", short: "trash lists" }
      ]
    };
  }
};
</script>
