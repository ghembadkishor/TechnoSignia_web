import { config } from "../config/config";
import apiClient from "./apiClient";
import { homeData } from "../data/homeData";

export const getHomeData = async () => {
  if (config.USE_MOCK) {
    return homeData;
  }
  const res = await apiClient.get("/home");
  return res.data;
};
