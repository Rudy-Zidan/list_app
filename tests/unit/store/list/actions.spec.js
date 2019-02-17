import mockAxios from "axios";
import actions from "@/store/modules/actions/list";

const list = {
  id: 1,
  name: "test",
  items: []
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

describe("destroyItem", () => {
  const savedlist = {
    id: 1,
    name: "test",
    items: [
      {
        id: 1,
        title: "test"
      }
    ]
  };

  beforeEach(() => {
    mockAxios.put.mockImplementationOnce(() => Promise.resolve({ data: list }));
  });

  it("destroy a an item inside a list", async () => {
    const commit = jest.fn();
    const params = {
      id: savedlist.id,
      listId: savedlist.items[0].id
    };

    await actions.destroyItem({ commit }, params);

    expect(mockAxios.put).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledWith("updateListItems", list);
  });
});
