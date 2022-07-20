import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";

import { rootReducer } from "../store/rootReducer";

const middleWares = [logger];
const composedEnhansers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhansers);
