import ListService from "@/services/ListService";

export default {
  async fetchList({ commit, dispatch }, id) {
    dispatch("wait/start", "loading list", { root: true });
    ListService.list(id)
      .then(res => {
        commit("setList", res.data);
        dispatch("wait/end", "loading list", { root: true });
      })
      .catch(() => {
        dispatch("wait/end", "loading list", { root: true });
      });
  },
  async fetchLists({ commit, dispatch }) {
    dispatch("wait/start", "loading lists", { root: true });
    ListService.all()
      .then(res => {
        commit("setLists", res.data);
        commit("clearList");
        dispatch("wait/end", "loading lists", { root: true });
      })
      .catch(() => {
        dispatch("wait/end", "loading lists", { root: true });
      });
  },
  async fetchListsInTrash({ commit, dispatch }) {
    dispatch("wait/start", "loading trash lists", { root: true });
    ListService.trash()
      .then(res => {
        commit("setListsInTrash", res.data);
        commit("clearList");
        dispatch("wait/end", "loading trash lists", { root: true });
      })
      .catch(() => {
        dispatch("wait/end", "loading trash lists", { root: true });
      });
  },
  async restoreList({ commit, dispatch }, id) {
    dispatch("wait/start", "loading restore list" + id, { root: true });
    ListService.restore(id)
      .then(res => {
        commit("restoreList", res.data);
        dispatch("wait/end", "loading restore list" + id, { root: true });
      })
      .catch(() => {
        dispatch("wait/end", "loading destroy list" + id, { root: true });
      });
  },
  async destroyList({ commit, dispatch }, id) {
    dispatch("wait/start", "loading destroy list" + id, { root: true });
    ListService.destroy(id)
      .then(res => {
        commit("removeList", res.data);
        dispatch("wait/end", "loading destroy list" + id, { root: true });
      })
      .catch(() => {
        dispatch("wait/end", "loading destroy list" + id, { root: true });
      });
  },
  async destroyItem({ commit, dispatch }, params) {
    dispatch("wait/start", "loading destroy item" + params.itemId, {
      root: true
    });
    ListService.destroyItem(params.id, params.itemId)
      .then(res => {
        commit("updateListItems", res.data);
        dispatch("wait/end", "loading destroy item" + params.itemId, {
          root: true
        });
      })
      .catch(() => {
        dispatch("wait/end", "loading destroy item" + params.itemId, {
          root: true
        });
      });
  },
  async deleteList({ commit, dispatch }, id) {
    dispatch("wait/start", "loading delete list" + id, { root: true });
    ListService.delete(id)
      .then(res => {
        if (res.status === 200) {
          commit("removeListInTrash", id);
        }
        dispatch("wait/end", "loading delete list" + id, { root: true });
      })
      .catch(() => {
        dispatch("wait/end", "loading delete list" + id, { root: true });
      });
  },
  async destroyItemFromList({ commit, dispatch }, id) {
    dispatch("wait/start", "loading destroy item" + id, { root: true });
    ListService.destroyItem(id)
      .then(res => {
        commit("removeItemFromList", res.data);
        dispatch("wait/end", "loading destroy item" + id, { root: true });
      })
      .catch(() => {
        dispatch("wait/end", "loading destroy item" + id, { root: true });
      });
  },
  async createList({ commit, dispatch }, params) {
    dispatch("wait/start", "loading save list", { root: true });
    params.items_attributes = params.items;
    delete params.items;
    ListService.create(params)
      .then(res => {
        commit("setList", res.data);
        dispatch("wait/end", "loading save list", { root: true });
      })
      .catch(() => {
        dispatch("wait/end", "loading save list", { root: true });
      });
  },
  async updateList({ commit, dispatch }, params) {
    dispatch("wait/start", "loading save list", { root: true });
    params.items_attributes = params.items;
    const id = params.id;

    ListService.update(id, params)
      .then(res => {
        commit("setList", res.data);
        dispatch("wait/end", "loading save list", { root: true });
      })
      .catch(() => {
        dispatch("wait/end", "loading save list", { root: true });
      });
  },
  async deleteItem({ commit, dispatch }, id) {
    dispatch("wait/start", "loading delete item" + id, { root: true });
    ListService.deleteItem(id)
      .then(res => {
        if (res.status === 200) {
          commit("removeItemFromList", id);
        }
        dispatch("wait/end", "loading delete item" + id, { root: true });
      })
      .catch(() => {
        dispatch("wait/end", "loading delete item" + id, { root: true });
      });
  }
};
