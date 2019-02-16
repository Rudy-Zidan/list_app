import Vue from "vue";
import Vuex from "vuex";
import List from "@/store/modules/list";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    List
  }
});
