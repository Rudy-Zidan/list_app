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
    state.lists[index].active_items = data.items;
  },
  removeListInTrash(state, id) {
    state.listsInTrash = state.listsInTrash.filter(list => {
      return list.id !== id;
    });
  },
  removeItemFromList(state, data) {
    let index = state.lists.findIndex(list => list.id == data.list.id);
    let items = state.lists[index].active_items;

    state.lists[index].active_items = items.filter(item => {
      return item.id !== data.id;
    });
  }
};
