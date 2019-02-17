import mutations from "@/store/modules/mutations/list";

// destructure assign `mutations`
describe("setLists", () => {
  it("adds a list to the state", () => {
    const list = {
      id: 1,
      name: "Test",
      items: [
        {
          id: 1,
          title: "Test",
          description: "This is a test"
        }
      ]
    };

    const state = {
      lists: []
    };

    mutations.setLists(state, { list });

    expect(state).toEqual({
      lists: { list: list }
    });
  });
});
