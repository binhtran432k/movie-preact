import { API_URL_BASE, API_URL_IMAGE } from "@/constants/paths";
import axios from "axios";

export const api = axios.create({
  baseURL: API_URL_BASE,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export function getImageUrlFromPathWithSize(path: string, size: string) {
  return `${API_URL_IMAGE}/${size}${path}`;
}

export function getSmallImageUrlFromPath(path: string) {
  return getImageUrlFromPathWithSize(path, "w154");
}

export function getBannerUrlFromPath(path: string) {
  return getImageUrlFromPathWithSize(path, "w1280");
}
