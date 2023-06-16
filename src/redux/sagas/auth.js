import { LoginAPI, registerAPI,  } from "../../apis";
import { userActions } from "../slice/user";
import { LOGIN_USER, REGISTER_USER } from "./types";
import { put, takeEvery } from "redux-saga/effects";
import { useNavigate } from "react-router-dom";
import { LoadingActions } from "../slice/loadingSlice";



export function* RegisterAPIsaga({payload}) {
    try {
      const response = yield registerAPI(payload);
      console.log(response);
    //   yield put(userActions.setUser(user.data));
    } catch (error) {
      console.error("Error occurred during API call:", error);
    }
  }

export function* LoginAPIsaga({payload, navigate}) {
    try {
      const response = yield LoginAPI(payload);
      console.log(response);
      yield put(userActions.setUser(response.data));
      yield put(LoadingActions.setLoading(false))
        navigate('/')
    } catch (error) {
      console.error("Error occurred during API call:", error);
    }
  }

export function* watchAuthAsync() {
  yield takeEvery(REGISTER_USER, RegisterAPIsaga);
  yield takeEvery(LOGIN_USER, LoginAPIsaga);
}
