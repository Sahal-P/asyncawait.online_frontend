/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const name = "chat";
const initialState = createinitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers });

export const ChatActions = { ...slice.actions };
export const ChatReducers = slice.reducer;

function createinitialState() {
  return {
    chat_id: null,
    messages: [],
  };
}
function createReducers() {
  return {
    setChatId,
    setMessages,
    removeState,
    addMessage,
    editMessageStatus
  };
  function setChatId(state, action) {
    state.chat_id = action.payload;
  }
  function setMessages(state, action) {
    state.messages = action.payload;
  }
  function addMessage(state, action) {
    state.messages.push(action.payload); // Add the new message to the array
  }
  function editMessageStatus(state, action){

    const { id, status } = action.payload;

  // Get the message from the state
  const message = state.messages.find((message) => message.id === id);

  // If the message exists, update its status
  if (message) {
    message.status = status;
  }

  // Return the new state
  return state;
}
  //   const { id, status } = action.payload;
  //   const messageIndex = state.messages.findIndex((message) => message.id === id);
  //   console.log(messageIndex,'indexx');

  //   if (messageIndex !== -1) {
  //     // Create a new array with the updated message
  //     const updatedMessages = state.messages.map((message, index) => {
  //       if (index === messageIndex) {
  //         return { ...message, status };
  //       }
  //       return message;
  //     });

  //     state.messages = updatedMessages;
  //   }
  //   // state.messages.map( obj => {
  //   //   if (obj.id === action.payload.id){
  //   //     return {...obj, status: action.payload.status}
  //   //   }
  //   // })
  // }
  function removeState(state, action) {
    return initialState
  }
}

export default ChatReducers;
