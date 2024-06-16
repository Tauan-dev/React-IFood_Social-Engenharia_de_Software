import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api", // Coloque a URL base da sua API aqui
});

export default api;
