import axios from "axios";
import { config } from "../config/config";

const apiClient = axios.create({
  baseURL: config.API_BASE_URL,
});

export default apiClient;
