import { takeLatest, call, all, put } from "redux-saga";
import {
  createUserDocumentfromAuth,
  getCurrentUser,
} from "../../utils/firebase/firebase.utils";
import { signInFailed } from "./user.actions";
import { UserActionType } from "./user.actionTypes";

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser;
    if (!userAuth) return;
    createUserDocumentfromAuth(userAuth);
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
