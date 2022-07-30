import { call, all } from "redux-saga/effects";
import { categoriesSaga } from "./categories/categories.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
