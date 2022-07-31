import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  createUserDocumentfromAuth,
  getCurrentUser,
} from "../../utils/firebase/firebase.utils";
import { signInFailed, signInSuccess } from "./user.actions";
import { UserActionType } from "./user.actionTypes";

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    //attach nexty line to a saga
    const auth = yield call(createUserDocumentfromAuth(userAuth));
    yield all([call(signInSuccess(auth))]);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionType.GET_CURRENT_SESSION, isUserAuthenticated);
}

export function* userSaga() {
  yield all([call(onCheckUserSession)]);
}
