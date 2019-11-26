import axios from "axios";
import { accessToken } from "../AuthUtils";

export const axiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    "Content-Type": "application/json"
  }
});
export const setAuthHeader = token => {
  axiosInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token}`;
};
export const deleteAuthHeader = () => {
  delete axiosInstance.defaults.headers.Authorization;
};
