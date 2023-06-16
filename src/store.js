import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../src/redux/index';
import {rootSaga} from './redux/sagas'

const rootPersistConfig = {
    key: 'root',
    storage,
  };

  
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store);

export default store
