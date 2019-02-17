import ListService from "@/services/ListService";

export default {
  async fetchList({ commit }, id) {
    ListService.list(id).then(res => {
      commit("setList", res.data);
    });
  },
  async fetchLists({ commit }) {
    ListService.all().then(res => {
      commit("setLists", res.data);
      commit("clearList");
    });
  },
  async fetchListsInTrash({ commit }) {
    ListService.trash().then(res => {
      commit("setListsInTrash", res.data);
      commit("clearList");
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
  },
  async destroyItemFromList({ commit }, id) {
    ListService.destroyItem(id).then(res => {
      commit("removeItemFromList", res.data);
    });
  },
  async createList({ commit }, params) {
    params.items_attributes = params.items;
    delete params.items;
    ListService.create(params).then(res => {
      commit("setList", res.data);
    });
  },
  async updateList({ commit }, params) {
    params.items_attributes = params.items;
    const id = params.id;
    delete params.items;
    delete params.id;

    ListService.update(id, params).then(res => {
      commit("setList", res.data);
    });
  },
  async deleteItem({ commit }, id) {
    ListService.deleteItem(id).then(res => {
      if (res.status === 200) {
        commit("removeItemFromList", id);
      }
    });
  }
};
