export default {
  setLists(state, data) {
    state.lists = data;
  },
  removeList(state, data) {
    state.lists = state.lists.filter(list => {
      return list.id !== data.id;
    });
  },
  updateList(state, data) {
    let index = state.lists.findIndex(list => list.id == data.id);
    state.lists[index] = data;
  }
};
