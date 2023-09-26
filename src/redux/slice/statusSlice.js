import { createSlice } from "@reduxjs/toolkit";


const name = "status";
const initialState = createinitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers });

export const StatusActions = { ...slice.actions };
export const StatusReducers = slice.reducer;

function createinitialState() {
  return {
    type: "",
    view: false,
    detailse: {},
  };
}
function createReducers() {
  return {
    setView,
    setDetails,
    removeState
    
  };
  function setView(state, action) {
    state.view = action.payload;
  }
  function setDetails(state, action) {
    state.detailse = action.payload;
  }
  function removeState() {
    return initialState
  }
}

export default StatusReducers;
