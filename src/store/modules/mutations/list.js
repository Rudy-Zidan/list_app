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
    if (!isNaN(data)) {
      let items = state.list.items;

      state.list.items = items.filter(item => {
        return item.id !== data;
      });
    } else if (state.list !== undefined && state.list.id !== undefined) {
      let index = state.list.items.findIndex(item => item.id == data.id);
      state.list.items[index].deleted_at = data.deleted_at;
    } else {
      let index = state.lists.findIndex(list => list.id == data.list.id);
      let items = state.lists[index].active_items;

      state.lists[index].active_items = items.filter(item => {
        return item.id !== data.id;
      });
    }
  },
  setList(state, data) {
    state.list = data;
  },
  clearList(state) {
    state.list = {
      name: "",
      items: [
        {
          title: "",
          description: ""
        }
      ]
    };
  }
};
