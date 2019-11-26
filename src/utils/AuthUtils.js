import { setAuthHeader, deleteAuthHeader } from "./axios/axios";
export const accessToken = "access_token";


const AuthUtils = {
  isUserLoggedIn: () => !!localStorage.getItem(accessToken),
  getToken: () => localStorage.getItem(accessToken),
  setToken: token => {
    localStorage.setItem(accessToken, token);
    setAuthHeader(token);
  },
  removeToken: () => {
    localStorage.removeItem(accessToken);
    deleteAuthHeader();
  }
};

export default AuthUtils;
