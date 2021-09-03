import Vue from "vue";
import Vuex from "vuex";
import List from "@/store/modules/list";
import Item from "@/store/modules/item";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    List,
    Item
  }
});
