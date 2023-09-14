
import { put, take, call, fork, cancel, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { connect, disconnect, send } from '@giantmachines/redux-websocket';
import { CHAT_WS, WS } from '../../apis/socket';
import { useSelector } from 'react-redux';

function createWebSocketChannel(socket) {
  return eventChannel((emit) => {
    socket.onopen = (event) => {
        console.log("connection opened redux saga");
    },
    socket.onmessage = (event) => {
      emit(JSON.parse(event.data));
    };

    socket.onclose = () => {
      emit({ type: 'WEBSOCKET_CLOSED' });
    };

    return () => {
      socket.close();
    };
  });
}

function* watchWebSocket(chatId) {
  const socket = yield call(connect, `${WS}${CHAT_WS}${chatId}/`); // Replace with your WebSocket server URL
  const channel = yield call(createWebSocketChannel, socket);

  yield put(connect()); // Optional: Dispatch an action to indicate that the WebSocket is connected

  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

function* webSocketRootSaga() {
    // const chatId = yield useSelector((state) => state.chat.chat_id);
  const socketTask = yield fork(watchWebSocket, chatId);
  // Handle WebSocket disconnect here if needed
  // const disconnectAction = yield take('DISCONNECT_WEBSOCKET');
  // if (disconnectAction) {
  //   yield cancel(socketTask);
  //   yield call(disconnect);
  // }
}

export default webSocketRootSaga;