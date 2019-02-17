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

const listsInTrash = {
  id: 1,
  name: "Test",
  items: [
    {
      id: 1,
      title: "Test",
      description: "This is a test"
    }
  ],
  deleted_at: Date.now()
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

describe("setListsInTrash", () => {
  it("adds a list to the state", () => {
    const state = {
      listsInTrash: []
    };

    mutations.setListsInTrash(state, { listsInTrash });

    expect(state).toEqual({
      listsInTrash: { listsInTrash: listsInTrash }
    });
  });
});

describe("removeList", () => {
  it("remove a list", () => {
    const state = {
      lists: [list]
    };

    mutations.removeList(state, list);

    expect(state).toEqual({ lists: [] });
  });
});

describe("updateListItems", () => {
  it("update items related to a list in state", () => {
    const state = {
      lists: [list]
    };

    let listUpdated = list;
    listUpdated.items = [];

    mutations.updateListItems(state, list);

    expect(state).toEqual({ lists: [listUpdated] });
  });
});

describe("removeListInTrash", () => {
  it("remove a list", () => {
    const state = {
      listsInTrash: [listsInTrash]
    };

    mutations.removeListInTrash(state, listsInTrash.id);

    expect(state).toEqual({ listsInTrash: [] });
  });
});

describe("restoreList", () => {
  it("restore a list", () => {
    const state = {
      listsInTrash: [listsInTrash]
    };

    mutations.restoreList(state, listsInTrash);

    expect(state).toEqual({ listsInTrash: [] });
  });
});
