import axios from "axios";
import { cookies } from "next/headers";

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = cookies().get("jwt")?.value;
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default async function createHttp() {
  return {
    get: (url: string) => http.get(url),
    post: (url: string, data: any) => http.post(url, data),
  };
}
