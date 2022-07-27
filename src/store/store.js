import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type:", action.type);
  console.log("payload:", action.payload);
  console.log("currentState:", store.getState());

  next(action);

  console.log("nextState:", store.getState());
};

const middleWares = [loggerMiddleWare];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhansers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhansers
);

export const persistor = persistStore(store);
