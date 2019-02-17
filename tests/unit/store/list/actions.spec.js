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
