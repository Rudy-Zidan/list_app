export default {
  setLists(state, data) {
    state.lists = data;
  },
  setListsInTrash(state, data) {
    state.listsInTrash = data;
  },
  restoreList(state, data) {
    state.listsInTrash = state.listsInTrash.filter(list => {
      return list.id !== data.id;
    });
  },
  removeList(state, data) {
    state.lists = state.lists.filter(list => {
      return list.id !== data.id;
    });
  },
  updateListItems(state, data) {
    let index = state.lists.findIndex(list => list.id == data.id);
    state.lists[index].items = data.items;
  },
  removeListInTrash(state, id) {
    state.listsInTrash = state.listsInTrash.filter(list => {
      return list.id !== id;
    });
  }
};
