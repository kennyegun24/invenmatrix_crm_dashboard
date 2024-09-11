import axios from "axios";
const BACKEND_API_ROUTE = process.env.BACKEND_API_ROUTE;
export const createAxios = (token) => {
  console.log(BACKEND_API_ROUTE);
  return axios.create({
    baseURL: BACKEND_API_ROUTE,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
