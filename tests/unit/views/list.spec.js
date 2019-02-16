import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import List from "@/views/List.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

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

describe("List.vue", () => {
  it("render component", () => {
    const wrapper = shallowMount(List, {
      store,
      localVue
    });

    expect(wrapper.find("h1").text()).toBe("This is Lists page");
    expect(wrapper.vm.lists.length).toBe(1);
  });
});
