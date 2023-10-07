import { toast } from "react-toastify";
import {
  getUsersAPI,
  messageUnknown,
  getContactsAPI,
} from "../../apis";
import { selectedActions } from "../slice/selectedUserSlice";
import { userActions } from "../slice/userSlice";
import { usersActions } from "../slice/usersSlice";
import {
  GET_CONTACTS,
  GET_USERS,
  MESSAGE_UNKNOWN,
} from "./types";
import { put, takeEvery } from "redux-saga/effects";

export function* getContactsSaga() {
  try {
    const contacts = yield getContactsAPI();

    yield put(userActions.setContacts(contacts.data));
  } catch (error) {
    console.warn("Error occurred during API call:", error);
  }
}

export function* getUsersSaga() {
  try {
    const users = yield getUsersAPI();
    yield put(usersActions.setUsers(users.data));
  } catch (err) {
    console.log(err);
  }
}

export function* messageUnknownSaga({ id }) {
  try {
    const response = yield messageUnknown(id);
    if (response?.status === 200) {
      yield put(userActions.addContact(response.data));
    yield put(
      selectedActions.setUser(response.data)
    );
    // yield put({ type: GET_CHAT_DETAILS, id: response.data.contact.id });
    }
    // if (response?.name === "AxiosError") {
    //   if (response.response.status === 409) {
    //     toast.warn(response.response?.data?.detail)
    //   }
    // }
    
  } catch (err) {
    toast.error("somthing went wrong")
  }
}

export function* watchUsersAsync() {
  yield takeEvery(GET_USERS, getUsersSaga);
  yield takeEvery(GET_CONTACTS, getContactsSaga);
  yield takeEvery(MESSAGE_UNKNOWN, messageUnknownSaga);
}
