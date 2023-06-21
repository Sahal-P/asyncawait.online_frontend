import { LoginAPI, registerAPI,  } from "../../apis";
import { userActions } from "../slice/user";
import { LOGIN_USER, REGISTER_USER } from "./types";
import { put, takeEvery } from "redux-saga/effects";
import { useNavigate } from "react-router-dom";
import { LoadingActions } from "../slice/loadingSlice";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';




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
      // if(response.code ==)
      Cookies.set('_X_identifier', JSON.stringify(response.data.id));
      yield put(userActions.setUser(response.data));
      yield put(LoadingActions.setLoading(false))
      navigate('/')
    } catch (error) {
      yield put(LoadingActions.setLoading(false))
      if(error.code ==="ERR_NETWORK"){
        toast.error(`${error.message} Please Try Again`)
      }else{
        toast.error("Somthing went wrong please try again")
      }
    }
  }

export function* watchAuthAsync() {
  yield takeEvery(REGISTER_USER, RegisterAPIsaga);
  yield takeEvery(LOGIN_USER, LoginAPIsaga);
}
