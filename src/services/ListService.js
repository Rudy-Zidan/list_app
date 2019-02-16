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
  delete(id) {
    return Api().delete("/lists/delete/" + id);
  }
};
