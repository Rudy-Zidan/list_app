import mockAxios from "axios";
import actions from "@/store/modules/actions/item";

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

describe("fetchItemsInTrash", () => {
  beforeEach(() => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: [itemInTrash] })
    );
  });

  it("fetch items in trash", async () => {
    const commit = jest.fn();
    const dispatch = jest.fn();

    await actions.fetchItemsInTrash({ commit, dispatch });

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledWith("setItemsInTrash", [itemInTrash]);
  });
});

describe("deleteItem", () => {
  beforeEach(() => {
    mockAxios.delete.mockImplementationOnce(() =>
      Promise.resolve({ data: itemInTrash, status: 200 })
    );
  });

  it("delete an item", async () => {
    const commit = jest.fn();
    const dispatch = jest.fn();

    await actions.deleteItem({ commit, dispatch }, itemInTrash.id);

    expect(mockAxios.delete).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledWith("removeItemInTrash", itemInTrash.id);
  });
});

describe("restoreItem", () => {
  beforeEach(() => {
    mockAxios.put.mockImplementationOnce(() =>
      Promise.resolve({ data: itemInTrash })
    );
  });

  it("restore an item", async () => {
    const commit = jest.fn();
    const dispatch = jest.fn();

    await actions.restoreItem({ commit, dispatch }, itemInTrash.id);

    expect(mockAxios.put).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledWith("restoreItem", itemInTrash);
  });
});
