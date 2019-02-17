import ItemService from "@/services/ItemService";

export default {
  async fetchItemsInTrash({ commit }) {
    ItemService.trash().then(res => {
      commit("setItemsInTrash", res.data);
    });
  },
  async deleteItem({ commit }, id) {
    ItemService.delete(id).then(res => {
      if (res.status === 200) {
        commit("removeItemInTrash", id);
      }
    });
  },
  async restoreItem({ commit }, id) {
    ItemService.restore(id).then(res => {
      commit("restoreItem", res.data);
    });
  }
};
