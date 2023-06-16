import { all } from "redux-saga/effects";
import { watchUsersAsync } from "./user";
import { watchAuthAsync } from "./auth";
import { watchLoadingAsync } from "./loading";

export function* rootSaga(){
    yield all([
        watchUsersAsync(),
        watchAuthAsync(),
        watchLoadingAsync(),
    ])
}

