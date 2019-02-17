import Vue from "vue";
import Router from "vue-router";
import List from "./views/List.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "list",
      component: List
    },
    {
      path: "/trash",
      name: "trash",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/Trash.vue")
    },
    {
      path: "/lists",
      name: "Create a list",
      component: () => import("./components/Form.vue")
    },
    {
      path: "/lists/:id",
      name: "Edit a list",
      component: () => import("./components/Form.vue")
    }
  ]
});
