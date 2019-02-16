import { shallowMount } from "@vue/test-utils";
import Trash from "@/views/Trash.vue";

describe("Trash.vue", () => {
  it("render component", () => {
    const wrapper = shallowMount(Trash);
    expect(wrapper.find("h1").text()).toBe("This is Trash page");
  });
});
