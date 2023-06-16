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
    user: {
      id: "",
      username: "",
      phone_number: "",
    },
    messages:{

    }
  };
}

function createReducers() {
  return {
    setUser,
  };
  function setUser(state, action) {
    state.user = action.payload;
  }
}

export default selectedReducers;
