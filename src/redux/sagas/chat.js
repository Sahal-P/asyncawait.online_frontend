import { GET_CHAT_DETAILS, SET_CHAT_DETAILS } from "./types";
import { put, takeEvery } from "redux-saga/effects";
import { LoadingActions } from "../slice/loadingSlice";
import { getChatDetails } from "../../apis";
import { ChatActions } from "../slice/chatDetailsSlice";
import { useQuery } from "react-query";

export function* GetChatDetailsSaga({ id }) {
  try {
    const details = yield getChatDetails(id);
    yield put(ChatActions.setChatId(details.data.chat.id));
    yield put(ChatActions.setMessages(details.data.message));
  } catch (error) {
    console.error("Error occurred during loading", error);
  }
}

export function* SetChatDetailsSaga(action) {
  try {
    const { data } = action;
    console.log((data));
    yield put(ChatActions.setChatId(data.chat.id));
    yield put(ChatActions.setMessages(data.message));

  } catch (error) {
    console.error("Error occurred during loading", error);
  }
}
export function* watchChatAsync() {
  yield takeEvery(GET_CHAT_DETAILS, GetChatDetailsSaga);
  yield takeEvery(SET_CHAT_DETAILS, SetChatDetailsSaga);
}
