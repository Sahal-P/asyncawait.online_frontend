import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useDispatch } from "react-redux";
import store, { persistor } from "./store.js";
import { QueryClient, QueryClientProvider } from 'react-query';
import { SET_LOADING } from "./redux/sagas/types/index.js";

const queryClient = new QueryClient(); 

// const InputBox = () => 

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
