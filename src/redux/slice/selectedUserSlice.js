import { createSlice } from "@reduxjs/toolkit";

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
    removeState,
  };
  function setUser(state, action) {
    state.user = action.payload;
  }
  function setState(state, action) {
    state.state = action.payload;
  }
  function removeState(state, action) {
    return initialState
  }
}

export default selectedReducers;
