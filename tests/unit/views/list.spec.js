import { shallowMount } from "@vue/test-utils";
import List from "@/views/List.vue";

describe("Trash.vue", () => {
  it("render component", () => {
    const wrapper = shallowMount(List);
    expect(wrapper.find("h1").text()).toBe("This is Lists page");
  });
});
