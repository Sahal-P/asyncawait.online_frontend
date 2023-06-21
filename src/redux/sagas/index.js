import { all } from "redux-saga/effects";
import { watchUsersAsync } from "./user";
import { watchAuthAsync } from "./auth";
import { watchLoadingAsync } from "./loading";
import { watchChatAsync } from "./chat";

export function* rootSaga(){
    yield all([
        watchUsersAsync(),
        watchAuthAsync(),
        watchLoadingAsync(),
        watchChatAsync(),
    ])
}

