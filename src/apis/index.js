import axios from "axios";
import Cookies from "js-cookie";
import generateCookieExpirationDates from "../utils/cookieUtils";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT_USER, SET_LOADING } from "../redux/sagas/types";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

let needRefresh = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    const RefreshToken = Cookies.get(import.meta.env.VITE_REFRESH_TOKEN)
    if (error.response.status === 401 && !needRefresh && RefreshToken) {
      needRefresh = true;
      const response = await axios.post("auth/refresh-token", {"token": RefreshToken});
      if (response.status === 200) {
        const {oneDayLater} = generateCookieExpirationDates();
        Cookies.set(
          import.meta.env.VITE_ACCESS_TOKEN,
          response.data.access_token,
          {expires: oneDayLater}
        );
      }else {
        const dispatch = useDispatch()
        const navigate = useNavigate()
        dispatch({ type: SET_LOADING, payload: true });
        dispatch({ type: LOGOUT_USER, payload: {} , navigate });
      }
      if (response.status === 200) {
        return axios(error.config);
      }
    }
    needRefresh = false;

    return error;
  }
);

axios.interceptors.request.use(
  (config) => {
    const Access = Cookies.get(import.meta.env.VITE_ACCESS_TOKEN);
    if (Access) {
      config.headers["Authorization"] = `Bearer ${Access}`;
    }
    // // Add custom header to GET and HEAD requests
    // if (config.method === "get" || config.method === "head") {
    //   config.headers["X-User-Identifier"] = `_identifier_${val}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getUsersAPI = async () => await axios.get("users");
export const getUserAPI = async () => await axios.get("");

export const getFriendsAPI = async () => await axios.get(`friends`);
export const getContactsAPI = async () => await axios.get(`chat/get_contacts`);
export const registerAPI = async (user) => await axios.post(`auth/register`, user);

export const createProfileAPI = async (profile) =>
  await axios.post(`auth/create-profile`, profile, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const LoginAPI = async (user) =>
  await axios.post(`auth/login`, user, {
    withCredentials: true,
  });
export const LogoutAPI = async (id) =>
  await axios.post(`auth/logout`, id, {
    withCredentials: true,
  });
export const messageUnknown = async (id) => await axios.post(`chat/unknown`, { id });
export const getChatDetails = async (id) =>
  await axios.post(`chat/get_chat_details`, { id });

export const createUserAPI = async (user) => await axios.post(`/users`, user);
export const getContactLastMessage = async (conatct_id) => await axios.get(`/get_contact_last_message`, conatct_id);
export const updateUserAPI = async (user) =>
  await axios.post(`/users/${user.id}`, user);
export const deleteUserByIdAPI = async (id) => await axios.post(`/users/${id}`);
