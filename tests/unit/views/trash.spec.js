import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import Trash from "@/views/Trash.vue";

Vue.use(Vuex);
Vue.use(Vuetify);

describe("Trash.vue", () => {
  it("render component", () => {
    const wrapper = shallowMount(Trash);
    expect(wrapper.vm.bottomNav).toBe("lists");
  });
});
