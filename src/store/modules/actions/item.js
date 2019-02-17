import ItemService from "@/services/ItemService";

export default {
  async fetchItemsInTrash({ commit }) {
    ItemService.trash().then(res => {
      commit("setItemsInTrash", res.data);
    });
  }
};
