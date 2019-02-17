import Api from "@/services/Api";

export default {
  all() {
    return Api().get("/lists");
  },
  list(id) {
    return Api().get("/lists/" + id);
  },
  create(params) {
    return Api().post("/lists", params);
  },
  update(id, params) {
    return Api().put("/lists/" + id, params);
  },
  destroy(id) {
    return Api().delete("/lists/" + id);
  },
  destroyItem(id, listId) {
    const params = {
      items_attributes: [
        {
          id: listId,
          _destroy: true
        }
      ]
    };

    return Api().put("/lists/" + id, params);
  },
  delete(id) {
    return Api().delete("/lists/delete/" + id);
  }
};
