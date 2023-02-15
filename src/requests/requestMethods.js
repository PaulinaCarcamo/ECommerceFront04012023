import axios from "axios";

const BASE_URL = "http://another-testing.vercel.app/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})