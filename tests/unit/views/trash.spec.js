import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import VueWait from "vue-wait";
import { shallowMount } from "@vue/test-utils";
import Trash from "@/views/Trash.vue";

Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueWait);

const list = {
  id: 1,
  name: "test",
  items: [
    {
      id: 1,
      title: "test",
      description: "test"
    }
  ]
};

const store = new Vuex.Store({
  state: {
    lists: [list]
  },
  getters: {
    getLists() {
      return [list];
    }
  },
  actions: {
    fetchLists() {
      return [list];
    }
  }
});

describe("Trash.vue", () => {
  it("render component", () => {
    const wrapper = shallowMount(Trash, {
      store,
      wait: new VueWait({ useVuex: true })
    });
    expect(wrapper.vm.bottomNav).toBe("lists");
  });
});
