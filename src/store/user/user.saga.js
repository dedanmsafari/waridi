import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  createUserDocumentfromAuth,
  getCurrentUser,
} from "../../utils/firebase/firebase.utils";
import { signInFailed, signInSuccess } from "./user.actions";
import { UserActionType } from "./user.actionTypes";

export function* userDocCreationfromAuthAsync(userAuth, additionalData) {
  try {
    const userSnapshotData = yield call(
      createUserDocumentfromAuth,
      userAuth,
      additionalData
    );
    console.log(userSnapshotData);
    console.log(userSnapshotData.data());
    yield put(
      signInSuccess({
        id: userSnapshotData.id,
        ...userSnapshotData.data(),
      })
    );
  } catch (error) {
    yield put(signInFailed(error));
  }
}
export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;

    yield call(userDocCreationfromAuthAsync, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionType.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
  yield all([call(onCheckUserSession)]);
}
