import ItemService from "@/services/ItemService";

export default {
  async fetchItemsInTrash({ commit, dispatch }) {
    dispatch("wait/start", "loading trash items", { root: true });
    ItemService.trash()
      .then(res => {
        commit("setItemsInTrash", res.data);
        dispatch("wait/end", "loading trash items", { root: true });
      })
      .catch(() => {
        dispatch("wait/end", "loading trash items", { root: true });
      });
  },
  async deleteItem({ commit, dispatch }, id) {
    dispatch("wait/start", "loading delete item" + id, { root: true });
    ItemService.delete(id)
      .then(res => {
        if (res.status === 200) {
          commit("removeItemInTrash", id);
        }
        dispatch("wait/end", "loading delete item" + id, { root: true });
      })
      .catch(() => {
        dispatch("wait/end", "loading delete item" + id, { root: true });
      });
  },
  async restoreItem({ commit, dispatch }, id) {
    dispatch("wait/start", "loading restore item" + id, { root: true });
    ItemService.restore(id)
      .then(res => {
        commit("restoreItem", res.data);
        dispatch("wait/end", "loading restore item" + id, { root: true });
      })
      .catch(() => {
        dispatch("wait/end", "loading restore item" + id, { root: true });
      });
  }
};
