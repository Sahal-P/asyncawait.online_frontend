import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const name = "user";
const initialState = createinitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers });

export const userActions = { ...slice.actions };
export const userReducers = slice.reducer;

function createinitialState() {
  return {
    user: {
      id: "",
      username: "",
      email: "",
      phone_number: "",
    },
    friends:[],
  };
}

function createReducers() {
  return {
    setUser,
    setFriends,
  };
  function setUser(state, action) {
    state.user = action.payload;
  }
  function setFriends(state, action) {
    console.log(action.payload);
    // state.users.push(action.payload)
    state.friends = action.payload;
  }
}

export default userReducers;
