import Api from "@/services/Api";

export default {
  all() {
    return Api().get("/lists");
  },
  trash() {
    return Api().get("/lists/trash");
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
  restore(id) {
    return Api().put("/lists/" + id + "/restore");
  },
  destroy(id) {
    return Api().delete("/lists/" + id);
  },
  destroyItem(id) {
    return Api().delete("/items/" + id);
  },
  delete(id) {
    return Api().delete("/lists/" + id + "/delete/");
  },
  deleteItem(id) {
    return Api().delete("/items/" + id + "/delete");
  }
};
