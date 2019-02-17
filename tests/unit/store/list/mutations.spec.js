import mutations from "@/store/modules/mutations/list";

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

describe("setLists", () => {
  it("adds a list to the state", () => {
    const state = {
      lists: []
    };

    mutations.setLists(state, { list });

    expect(state).toEqual({
      lists: { list: list }
    });
  });
});

describe("removeList", () => {
  it("adds a list to the state", () => {
    const state = {
      lists: [list]
    };

    mutations.removeList(state, list);

    expect(state).toEqual({ lists: [] });
  });
});

describe("updateList", () => {
  it("adds a list to the state", () => {
    const state = {
      lists: [list]
    };

    let listUpdated = list;
    listUpdated.items = [];

    mutations.updateList(state, list);

    expect(state).toEqual({ lists: [listUpdated] });
  });
});
