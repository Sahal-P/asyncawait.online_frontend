import { createSlice } from "@reduxjs/toolkit";

const name = "loading";
const initialState = createinitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers });

export const LoadingActions = { ...slice.actions };
export const LoadingReducers = slice.reducer;

function createinitialState() {
  return {
    state: false,
  };
}
function createReducers() {
  return {
    setLoading,
  };
  function setLoading(state, action) {
    state.state = action.payload;
  }
}

export default LoadingReducers;
