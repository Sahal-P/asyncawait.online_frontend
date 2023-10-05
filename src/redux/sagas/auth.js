import { LoginAPI, LogoutAPI, registerAPI } from "../../apis";
import { userActions } from "../slice/userSlice";
import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "./types";
import { put, takeEvery } from "redux-saga/effects";
import { LoadingActions } from "../slice/loadingSlice";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { ChatActions } from "../slice/chatDetailsSlice";
import { usersActions } from "../slice/usersSlice";
import { selectedActions } from "../slice/selectedUserSlice";
import generateCookieExpirationDates from "../../utils/cookieUtils"

export function* RegisterAPIsaga({ payload, navigate }) {
  try {
    const response = yield registerAPI(payload);
    if (response.status === 201) {
      Cookies.set(
        import.meta.env.VITE_USER_PASS,
        btoa(payload.password)
      );
      toast.success("Created"); 
      yield put(LoadingActions.setLoading(false));
      navigate(`/onboarding/${response.data.id}`)
    }
    yield put(LoadingActions.setLoading(false));
    //   yield put(userActions.setUser(user.data));
  } catch (error) {
    yield put(LoadingActions.setLoading(false));
    toast.error("Error creating user");
  }
}

export function* LoginAPIsaga({ payload, navigate }) {
  try {
    const response = yield LoginAPI(payload);
    if (response.status === 200) {
      const {sevenDaysLater, oneDayLater} = generateCookieExpirationDates();
      Cookies.set(
        import.meta.env.VITE_ACCESS_TOKEN,
        response.data.access_token,
        {expires: oneDayLater}
      );
      Cookies.set(
        import.meta.env.VITE_REFRESH_TOKEN,
        response.data.refresh_token,
        {expires: sevenDaysLater}
      );
      delete response.data.access_token;
      delete response.data.refresh_token;
      yield put(userActions.setUser(response.data));
      yield put(LoadingActions.setLoading(false));
      navigate("/");
    } else {
      // Handle other response status codes or conditions
      yield put(LoadingActions.setLoading(false));
      toast.error("Invalid credentials or other error");
    }
  } catch (error) {
    yield put(LoadingActions.setLoading(false));
    if (error.code === "ERR_NETWORK") {
      toast.error(`${error.message} Please Try Again`);
    } else if (error.code === "ERR_BAD_REQUEST") {
      toast.error("Invalid Credentials");
    } else {
      toast.error("Somthing Went Wrong");
    }
  }
}

export function* LogOutAPIsaga({ payload, navigate }) {
  try {
    const response = yield LogoutAPI(payload);
    console.log(response);
    if (response.status === 204) {
      Cookies.remove("_X_identifier");
      Cookies.remove(import.meta.env.VITE_ACCESS_TOKEN);
      Cookies.remove(import.meta.env.VITE_REFRESH_TOKEN);
      yield put(userActions.removeState());
      yield put(ChatActions.removeState());
      yield put(usersActions.removeState());
      yield put(selectedActions.removeState());
      yield put(LoadingActions.setLoading(false));

      navigate("/login");
    }
  } catch (error) {
    yield put(LoadingActions.setLoading(false));
    if (
      error.code === "ERR_NETWORK" ||
      error.code === "ERR_CONNECTION_REFUSED"
    ) {
      toast.error(`${error.message} Please Try Again`);
    } else {
      toast.error("Somthing went wrong while Logout");
      Cookies.remove("_X_identifier");
      Cookies.remove(import.meta.env.VITE_ACCESS_TOKEN);
      Cookies.remove(import.meta.env.VITE_REFRESH_TOKEN);
      yield put(userActions.removeState());
      yield put(ChatActions.removeState());
      yield put(usersActions.removeState());
      yield put(selectedActions.removeState());
      yield put(LoadingActions.setLoading(false));

      navigate("/login");
    }
  }
}

export function* watchAuthAsync() {
  yield takeEvery(REGISTER_USER, RegisterAPIsaga);
  yield takeEvery(LOGIN_USER, LoginAPIsaga);
  yield takeEvery(LOGOUT_USER, LogOutAPIsaga);
}
