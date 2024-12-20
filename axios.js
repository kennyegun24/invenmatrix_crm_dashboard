import axios from "axios";
const BACKEND_API_ROUTE =
  process.env.BACKEND_API_ROUTE || process.env.NEXT_PUBLIC_BACKEND_API_ROUTE;
export const createAxios = (token) => {
  return axios.create({
    baseURL: BACKEND_API_ROUTE,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
