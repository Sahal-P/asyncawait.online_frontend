import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
    contacts: [],
  };
}

function createReducers() {
  return {
    setUser,
    setContacts,
    addContact,
    removeState,
    editContact
  };
  function setUser(state, action) {
    state.user = action.payload;
  }
  function setContacts(state, action) {
    state.contacts = action.payload;
  }
  function addContact(state, action) {
    state.contacts.push(action.payload);
  }
  function removeState(state, action) {
    return initialState
  }
  function editContact(state, action){

    const { id, message } = action.payload;

  // Get the message from the state
  const contact = state.contacts.find((contact) => contact.contact.id === id);
    console.log(contact);
  // If the message exists, update its status
  // if (message) {
  //   message.status = status;
  // }

  // Return the new state
  return state;
}
}

export default userReducers;
