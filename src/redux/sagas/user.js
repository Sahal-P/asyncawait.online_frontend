import {
  getFriendsAPI,
  getUserAPI,
  getUsersAPI,
  messageUnknown,
  getContactsAPI,
} from "../../apis";
import { selectedActions } from "../slice/selectedUserSlice";
import { userActions } from "../slice/user";
import { usersActions } from "../slice/users";
import {
  GET_CHAT_DETAILS,
  GET_CONTACTS,
  GET_FRIENDS,
  GET_USER,
  GET_USERS,
  MESSAGE_UNKNOWN,
} from "./types";
import { put, takeEvery } from "redux-saga/effects";

export function* getUserSaga() {
  try {
    const user = yield getUserAPI();

    yield put(userActions.setUser(user.data));
  } catch (error) {
    console.error("Error occurred during API call:", error);
  }
}

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
    const contact = yield messageUnknown(id);
    console.log(contact);
    yield put(userActions.addContact(contact.data));
    yield put(
      selectedActions.setUser({
        id: contact.data?.id,
        username: contact.data?.contact.username,
        phone: contact.data?.contact.phone,
      })
    );
    yield put({ type: GET_CHAT_DETAILS, id: contact.data.contact.id });
  } catch (err) {
    console.log(err);
  }
}

export function* watchUsersAsync() {
  yield takeEvery(GET_USER, getUserSaga);
  yield takeEvery(GET_USERS, getUsersSaga);
  yield takeEvery(GET_CONTACTS, getContactsSaga);
  yield takeEvery(MESSAGE_UNKNOWN, messageUnknownSaga);
}
