import { API_URL_BASE } from "@/constants/paths";
import axios from "axios";

export const api = axios.create({
  baseURL: API_URL_BASE,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});
