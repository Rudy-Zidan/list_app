import mutations from "@/store/modules/mutations/item";

const itemInTrash = {
  id: 1,
  title: "test",
  description: "this is a test",
  list: {
    id: 1,
    name: "Test"
  },
  deleted_at: Date.now()
};

describe("setItemsInTrash", () => {
  it("adds a list to the state", () => {
    const state = {
      itemsInTrash: []
    };

    mutations.setItemsInTrash(state, { itemInTrash });

    expect(state).toEqual({
      itemsInTrash: { itemInTrash: itemInTrash }
    });
  });
});

describe("removeItemInTrash", () => {
  it("remove an item", () => {
    const state = {
      itemsInTrash: [itemInTrash]
    };

    mutations.removeItemInTrash(state, itemInTrash.id);

    expect(state).toEqual({ itemsInTrash: [] });
  });
});

describe("restoreItem", () => {
  it("restore an item", () => {
    const state = {
      itemsInTrash: [itemInTrash]
    };

    mutations.restoreItem(state, itemInTrash);

    expect(state).toEqual({ itemsInTrash: [] });
  });
});
