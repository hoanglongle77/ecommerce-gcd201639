// app/client.js
import axios from "axios";

const API_BASE_URL = process.env.BE_API_URL;

export const store = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  },
});
