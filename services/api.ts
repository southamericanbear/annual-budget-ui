"use server";

import axios, { AxiosInstance } from "axios";

const baseUrl = process.env.BASE_URL;

const api: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
