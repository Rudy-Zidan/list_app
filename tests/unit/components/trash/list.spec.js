import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import List from "@/components/trash/List.vue";

Vue.use(Vuex);
Vue.use(Vuetify);

const listInTrash = {
  id: 1,
  name: "test",
  items: [
    {
      id: 1,
      title: "test",
      description: "test"
    }
  ],
  deleted_at: Date.now()
};

const store = new Vuex.Store({
  state: {
    listsInTrash: [listInTrash]
  },
  getters: {
    getListsInTrash() {
      return [listInTrash];
    }
  },
  actions: {
    fetchListsInTrash() {
      return [listInTrash];
    }
  }
});

describe("List.vue", () => {
  it("render component", () => {
    const wrapper = shallowMount(List, { store });
    expect(wrapper.vm.lists.length).toBe(1);
  });
});
