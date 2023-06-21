import { SET_LOADING } from "./types";
import { put, takeEvery } from "redux-saga/effects";
import { LoadingActions } from "../slice/loadingSlice";

export function* LoadingControllsaga({ payload }) {
  try {
    yield put(LoadingActions.setLoading(payload));
  } catch (error) {
    console.error("Error occurred during loading", error);
  }
}

export function* watchLoadingAsync() {
  yield takeEvery(SET_LOADING, LoadingControllsaga);
}
