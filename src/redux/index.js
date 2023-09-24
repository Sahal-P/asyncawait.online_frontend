import userReducers from "./slice/userSlice";
import { combineReducers } from "@reduxjs/toolkit";
// import storageSession from "redux-persist/lib/storage/session";
// import persistReducer from "redux-persist/es/persistReducer";
import selectedReducers from "./slice/selectedUserSlice";
import LoadingReducers from "./slice/loadingSlice";
import usersReducers from "./slice/usersSlice";
import ChatReducers from "./slice/chatDetailsSlice";

// const userPersistConfig = {
//   key: "user",
//   storage: storageSession,
// };

// const persistReducers = combineReducers({
//   user: userReducers,
//   selected: selectedReducers,
//   loading: LoadingReducers,
// });


const rootReducer = combineReducers({
  // user: persistReducer(userPersistConfig, userReducers),
  user: userReducers,
  users: usersReducers,
  selected: selectedReducers,
  loading: LoadingReducers,
  chat: ChatReducers,
});

export default rootReducer;
