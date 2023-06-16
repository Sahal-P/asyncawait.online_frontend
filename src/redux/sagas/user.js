import { getFriendsAPI, getUserAPI, getUsersAPI } from "../../apis";
import { userActions } from "../slice/user";
import { GET_FRIENDS, GET_USER } from "./types";
import { put, takeEvery } from "redux-saga/effects";

export function* getUserSaga() {
    try {
      const user = yield getUserAPI();
      
      yield put(userActions.setUser(user.data));
    } catch (error) {
      console.error("Error occurred during API call:", error);
    }
  }

export function* getFriendsSaga() {
    try {
      const friends = yield getFriendsAPI();
      
      console.log(friends, "friends call");
      yield put(userActions.setFriends(friends.data));
    } catch (error) {
      console.warn("Error occurred during API call:", error);
    }
  }


export function* watchUsersAsync() {
  yield takeEvery(GET_USER, getUserSaga);
  yield takeEvery(GET_FRIENDS, getFriendsSaga);
}
