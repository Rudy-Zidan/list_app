export default {
  setLists(state, data) {
    state.lists = data;
  },
  removeList(state, data) {
    state.lists = state.lists.filter(list => {
      return list.id !== data.id;
    });
  }
};
