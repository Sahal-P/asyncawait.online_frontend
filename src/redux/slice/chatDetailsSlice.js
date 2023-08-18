import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const name = "chat";
const initialState = createinitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers });

export const ChatActions = { ...slice.actions };
export const ChatReducers = slice.reducer;

function createinitialState() {
  return {
    chat_id: null,
    messages: [],
  };
}
function createReducers() {
  return {
    setChatId,
    setMessages,
    removeState,
  };
  function setChatId(state, action) {
    state.chat_id = action.payload;
  }
  function setMessages(state, action) {
    state.messages = action.payload;
  }
  function removeState(state, action) {
    return initialState
  }
}

export default ChatReducers;
