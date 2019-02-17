import mockAxios from "axios";
import actions from "@/store/modules/actions/list";

const list = {
  id: 1,
  name: "test",
  items: []
};

const listInTrash = {
  id: 1,
  name: "test",
  items: [],
  deleted_at: Date.now()
};

describe("fetchLists", () => {
  beforeEach(() => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: [list] })
    );
  });

  it("fetch lists", async () => {
    const commit = jest.fn();

    await actions.fetchLists({ commit });

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledWith("setLists", [list]);
  });
});

describe("fetchListsInTrash", () => {
  beforeEach(() => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: [listInTrash] })
    );
  });

  it("fetch lists in trash", async () => {
    const commit = jest.fn();

    await actions.fetchListsInTrash({ commit });

    expect(mockAxios.get).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith("setListsInTrash", [listInTrash]);
  });
});

describe("destroyList", () => {
  beforeEach(() => {
    mockAxios.delete.mockImplementationOnce(() =>
      Promise.resolve({ data: list })
    );
  });

  it("destroy a list", async () => {
    const commit = jest.fn();

    await actions.destroyList({ commit }, list.id);

    expect(mockAxios.delete).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledWith("removeList", list);
  });
});

describe("destroyItemFromList", () => {
  const item = {
    id: 1,
    title: "test",
    list: {
      id: 1,
      name: "test"
    }
  };

  beforeEach(() => {
    mockAxios.delete.mockImplementationOnce(() =>
      Promise.resolve({ data: list })
    );
  });

  it("destroy a an item inside a list", async () => {
    const commit = jest.fn();

    await actions.destroyItemFromList({ commit }, item.id);

    expect(mockAxios.delete).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith("removeItemFromList", list);
  });
});

describe("deleteList", () => {
  beforeEach(() => {
    mockAxios.delete.mockImplementationOnce(() =>
      Promise.resolve({ data: listInTrash, status: 200 })
    );
  });

  it("delete a list", async () => {
    const commit = jest.fn();

    await actions.deleteList({ commit }, listInTrash.id);

    expect(mockAxios.delete).toHaveBeenCalledTimes(3);
    expect(commit).toHaveBeenCalledWith("removeListInTrash", listInTrash.id);
  });
});

describe("restoreList", () => {
  beforeEach(() => {
    mockAxios.put.mockImplementationOnce(() => Promise.resolve({ data: list }));
  });

  it("restore a list", async () => {
    const commit = jest.fn();

    await actions.restoreList({ commit }, listInTrash.id);

    expect(mockAxios.put).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledWith("restoreList", list);
  });
});
