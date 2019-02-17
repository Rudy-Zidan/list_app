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

    await actions.fetchItemsInTrash({ commit });

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledWith("setItemsInTrash", [itemInTrash]);
  });
});
