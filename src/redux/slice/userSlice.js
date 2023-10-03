import { createSlice } from "@reduxjs/toolkit";

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
    editContact,
    editInitialContact,
    setContactAsReaded
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
  function setContactAsReaded(state, action){
    const id = action.payload;
    const contact = state.contacts.find((contact) => contact.id === id);
    contact.unread_count = 0

    return state

  }
  function editContact(state, action){

    const { content, sender, timestamp, message_type, is_read  } = action.payload;
    console.log(action.payload);
  // Get the contact from the state
  const contact = state.contacts.find((contact) => contact.contact.id === sender);
  console.log(contact, '[[[[[[[[[[[[[[[');
  // If the contact exists, update its status
  if (contact) {
    contact.last_activity = content;
    contact.last_activity_type = "Message";
    if (!is_read){
      contact.unread_count +=1 ;
    }
    contact.last_activity_time = timestamp ;
  }

  return state;
}
function editInitialContact(state, action){
  
  const {contact_id,content,timestampe,is_read, count } = action.payload;
const contact = state.contacts.find((contact) => contact.contact.id === contact_id);
// If the contact exists, update its status
if (contact) {
  contact.last_activity = content;
  contact.last_activity_type = "Message";
  if (!is_read){
    contact.unread_count = count ;
  }
  contact.last_activity_time = timestampe ;
}

return state;

}
}

export default userReducers;
