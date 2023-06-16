import userReducers from "./slice/user";
import { combineReducers } from '@reduxjs/toolkit';
import storageSession from 'redux-persist/lib/storage/session'
import persistReducer from "redux-persist/es/persistReducer";
import selectedReducers from "./slice/selectedUserSlice";
import LoadingReducers from "./slice/loadingSlice";



const userPersistConfig = {
    key: 'user',
    storage: storageSession,
  }

const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, userReducers),
    selected: selectedReducers,
    loading:LoadingReducers,
  });
  
export default rootReducer;