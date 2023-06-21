import userReducers from "./slice/user";
import { combineReducers } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import persistReducer from "redux-persist/es/persistReducer";
import selectedReducers from "./slice/selectedUserSlice";
import LoadingReducers from "./slice/loadingSlice";
import usersReducers from "./slice/users";
import ChatReducers from "./slice/chatDetailsSlice";

const userPersistConfig = {
  key: "user",
  storage: storageSession,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducers),
  users: usersReducers,
  selected: selectedReducers,
  loading: LoadingReducers,
  chat: ChatReducers,
});

export default rootReducer;
