import axios from "axios";

const BASE_URL = "https://another-testing.vercel.app/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})