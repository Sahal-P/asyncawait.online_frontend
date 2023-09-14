import { LoginAPI, LogoutAPI, registerAPI } from "../../apis";
import { userActions } from "../slice/user";
import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "./types";
import { put, takeEvery } from "redux-saga/effects";
import { useNavigate } from "react-router-dom";
import { LoadingActions } from "../slice/loadingSlice";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import moment from "moment";
import { ChatActions } from "../slice/chatDetailsSlice";
import { usersActions } from "../slice/users";
import { selectedActions } from "../slice/selectedUserSlice";

export function* RegisterAPIsaga({ payload }) {
  try {
    const response = yield registerAPI(payload);
    if (response.status === 200) {

      toast.success("Created");
    }
    //   yield put(userActions.setUser(user.data));
  } catch (error) {
    toast.error("Somthing Went Wrong");
  }
}

export function* LoginAPIsaga({ payload, navigate }) {
  try {
    const response = yield LoginAPI(payload);
    if (response.status === 200) {
      Cookies.set(
        "_X_identifier",
        `${moment()}${JSON.stringify(response.data.id)}`
      );
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
      console.log(error.code);
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
    if (response.status === 200) {
      Cookies.remove("_X_identifier");
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
      toast.error("Somthing went wrong please try again");
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
