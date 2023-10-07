import { GET_CHAT_DETAILS, SET_CHAT_DETAILS, SET_MESSAGE_STATUS } from "./types";
import { put, takeEvery } from "redux-saga/effects";
import { getChatDetails, setMessageStatus } from "../../apis";
import { ChatActions } from "../slice/chatDetailsSlice";

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
    yield put(ChatActions.setChatId(data.chat.id));
    yield put(ChatActions.setMessages(data.message));

  } catch (error) {
    console.error("Error occurred during loading", error);
  }
}

export function* SetMessageStatusSaga({ids}) {
  try {
    
    yield setMessageStatus(ids);
    // yield put(ChatActions.setChatId(data.chat.id));
    // yield put(ChatActions.setMessages(data.message));

  } catch (error) {
    console.error("Error occurred during the update of MessageStatus", error);
  }
}


export function* watchChatAsync() {
  yield takeEvery(GET_CHAT_DETAILS, GetChatDetailsSaga);
  yield takeEvery(SET_CHAT_DETAILS, SetChatDetailsSaga);
  yield takeEvery(SET_MESSAGE_STATUS, SetMessageStatusSaga)
}
