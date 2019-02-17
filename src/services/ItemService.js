import Api from "@/services/Api";

export default {
  trash() {
    return Api().get("/items/trash");
  }
};
