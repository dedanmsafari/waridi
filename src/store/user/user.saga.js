import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  createUserDocumentfromAuth,
  getCurrentUser,
  createAuthWithEmailAndPassword,
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from "../../utils/firebase/firebase.utils";
import {
  signInFailed,
  signInSuccess,
  signUpSuccess,
  signUpFailed,
  signOutUserSuccess,
  signOutUserFailed,
} from "./user.actions";
import { UserActionType } from "./user.actionTypes";

export function* signInAuthWithGoogle() {
  try {
    const { userAuth } = yield call(signInWithGooglePopup);
    yield call(userDocCreationfromAuthAsync, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signOutUserAsync() {
  try {
    const { user } = yield call(signOutUser);
    yield put(signOutUserSuccess(user));
  } catch (error) {
    yield put(signOutUserFailed(error));
  }
}

export function* signOutUserAsyncSuccess(user) {
  try {
    yield call(userDocCreationfromAuthAsync, user);
  } catch (error) {
    yield put(signOutUserFailed(error));
  }
}

export function* signInAuthCreationWithEmailAndPassword({
  payload: { email, password },
}) {
  try {
    const { userAuth } = yield call(
      signInAuthWithEmailAndPassword,
      email,
      password
    );
    yield call(userDocCreationfromAuthAsync, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUpAuthCreationWithEmailAndPassword({
  payload: { email, password, displayName },
}) {
  try {
    const { userAuth } = yield call(
      createAuthWithEmailAndPassword,
      email,
      password
    );

    yield put(signUpSuccess(userAuth, displayName));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onSignInAfterSignUp({ payload: { user, additionalData } }) {
  try {
    yield call(userDocCreationfromAuthAsync, user, additionalData);
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

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

export function* onGoogleSignIn() {
  yield takeLatest(UserActionType.SIGN_IN_GOOGLE, signInAuthWithGoogle);
}

export function* onEmailandPasswordSignIn() {
  yield takeLatest(
    UserActionType.SIGN_IN_EMAIL_PASSWORD,
    signInAuthCreationWithEmailAndPassword
  );
}
export function* onEmailandPasswordSignUp() {
  yield takeLatest(
    UserActionType.SIGN_UP_EMAIL_PASSWORD,
    signUpAuthCreationWithEmailAndPassword
  );
}

export function* onUserSignOutStart() {
  yield takeLatest(UserActionType.SIGN_OUT_START, signOutUserAsync);
}
export function* onUserSignOutSuccess() {
  yield takeLatest(UserActionType.SIGN_OUT_SUCCESS, signOutUserAsyncSuccess);
}

export function* onUserSignUp() {
  yield takeLatest(UserActionType.SIGN_UP_SUCCESS, onSignInAfterSignUp);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignIn),
    call(onEmailandPasswordSignIn),
    call(onEmailandPasswordSignUp),
    call(onUserSignOutStart),
    call(onUserSignUp),
    call(onUserSignOutSuccess),
  ]);
}
