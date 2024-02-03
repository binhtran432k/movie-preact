import { API_URL_BASE, API_URL_IMAGE } from "@/constants/paths";
import axios from "axios";

export const api = axios.create({
  baseURL: API_URL_BASE,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export function getImageUrlFromPath(path?: string) {
  if (path) {
    return `${API_URL_IMAGE}${path}`;
  }
}
