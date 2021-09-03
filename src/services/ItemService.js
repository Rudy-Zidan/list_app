import Api from "@/services/Api";

export default {
  trash() {
    return Api().get("/items/trash");
  },
  delete(id) {
    return Api().delete("/items/" + id + "/delete/");
  },
  restore(id) {
    return Api().put("/items/" + id + "/restore");
  }
};
