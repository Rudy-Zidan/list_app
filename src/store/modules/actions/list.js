import ListService from "@/services/ListService";

export default {
  async fetchLists({ commit }) {
    ListService.all().then(res => {
      commit("setLists", res.data);
    });
  },
  async fetchListsInTrash({ commit }) {
    ListService.trash().then(res => {
      commit("setListsInTrash", res.data);
    });
  },
  async restoreList({ commit }, id) {
    ListService.restore(id).then(res => {
      commit("restoreList", res.data);
    });
  },
  async destroyList({ commit }, id) {
    ListService.destroy(id).then(res => {
      commit("removeList", res.data);
    });
  },
  async destroyItem({ commit }, params) {
    ListService.destroyItem(params.id, params.itemId).then(res => {
      commit("updateListItems", res.data);
    });
  },
  async deleteList({ commit }, id) {
    ListService.delete(id).then(res => {
      if (res.status === 200) {
        commit("removeListInTrash", id);
      }
    });
  }
};
