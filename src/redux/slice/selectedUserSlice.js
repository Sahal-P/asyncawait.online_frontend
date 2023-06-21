import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const name = "selected";
const initialState = createinitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers });

export const selectedActions = { ...slice.actions };
export const selectedReducers = slice.reducer;

function createinitialState() {
  return {
    state: false,
    user: {},
    messages: {},
  };
}

function createReducers() {
  return {
    setUser,
    setState,
  };
  function setUser(state, action) {
    state.user = action.payload;
  }
  function setState(state, action) {
    state.state = action.payload;
  }
}

export default selectedReducers;
