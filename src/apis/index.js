import axios from "axios";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    const val = Cookies.get("_X_identifier");
    // Add custom header to GET and HEAD requests
    if (config.method === "get" || config.method === "head") {
      config.headers["X-User-Identifier"] = `_identifier_${val}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getUsersAPI = async () => axios.get("users");
export const getUserAPI = async () => axios.get("");

export const getFriendsAPI = async () => axios.get(`friends`);
export const getContactsAPI = async () => axios.get(`chat/get_contacts`);
export const registerAPI = async (user) => axios.post(`auth/register`, user);
export const LoginAPI = async (user) =>
  axios.post(`auth/login`, user, {
    withCredentials: true,
  });
export const LogoutAPI = async (id) =>
  axios.post(`auth/logout`, id, {
    withCredentials: true,
  });
export const messageUnknown = async (id) => axios.post(`chat/unknown`, { id });
export const getChatDetails = async (id) =>
  axios.post(`chat/get_chat_details`, { id });

export const createUserAPI = async (user) => axios.post(`/users`, user);
export const updateUserAPI = async (user) =>
  axios.post(`/users/${user.id}`, user);
export const deleteUserByIdAPI = async (id) => axios.post(`/users/${id}`);
