export default {
  setItemsInTrash(state, data) {
    state.itemsInTrash = data;
  },
  removeItemInTrash(state, id) {
    state.itemsInTrash = state.itemsInTrash.filter(item => {
      return item.id !== id;
    });
  },
  restoreItem(state, data) {
    state.itemsInTrash = state.itemsInTrash.filter(item => {
      return item.id !== data.id;
    });
  }
};
