import { GET_CHAT_DETAILS } from "./types";
import { put, takeEvery } from "redux-saga/effects";
import { LoadingActions } from "../slice/loadingSlice";
import { getChatDetails } from "../../apis";
import { ChatActions } from "../slice/chatDetailsSlice";

export function* GetChatDetailsSaga({ id }) {
  try {
    const details = yield getChatDetails(id);
    yield put(ChatActions.setChatId(details.data.chat.id));
    yield put(ChatActions.setMessages(details.data.message));
    
    console.log(details);
  } catch (error) {
    console.error("Error occurred during loading", error);
  }
}
export function* watchChatAsync() {
  yield takeEvery(GET_CHAT_DETAILS, GetChatDetailsSaga);
}
