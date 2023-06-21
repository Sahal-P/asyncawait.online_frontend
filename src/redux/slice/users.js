import { createSlice } from "@reduxjs/toolkit";

const name = "users";
const initialState = createinitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers });

export const usersActions = { ...slice.actions };
export const usersReducers = slice.reducer;

function createinitialState() {
  return {
    users: [],
  };
}

function createReducers() {
  return {
    setUsers,
  };
  function setUsers(state, action) {
    state.users = action.payload;
  }
}

export default usersReducers;
