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
    contacts:[],
  };
}

function createReducers() {
  return {
    setUser,
    setContacts,
    addContact,
  };
  function setUser(state, action) {
    state.user = action.payload;
  }
  function setContacts(state, action) {
    state.contacts = action.payload;
  }
  function addContact(state, action) {
    state.contacts.push(action.payload)
  }
}

export default userReducers;
