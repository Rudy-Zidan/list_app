import axios from "axios";
import toast from "@/toast";

export default () => {
  let instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response) {
        if (error.response.data.status === 404) {
          toast.error(error.response.data.error, "Requested List");
        } else {
          toast.error(
            error.response.data.errors[0].detailed_message,
            error.response.data.errors[0].field
          );
        }
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error(error.message);
      }
      return Promise.reject(error);
    }
  );

  return instance;
};
