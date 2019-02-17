import ListService from "@/services/ListService";

export default {
  async fetchLists({ commit }) {
    ListService.all().then(res => {
      commit("setLists", res.data);
    });
  },
  async destroyList({ commit }, id) {
    ListService.destroy(id).then(res => {
      commit("removeList", res.data);
    });
  }
};
