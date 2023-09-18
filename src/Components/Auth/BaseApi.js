import axios from "axios";

const api = axios.create({
  baseURL: "https://cafescale.site/api/v1",
});

export default api;
