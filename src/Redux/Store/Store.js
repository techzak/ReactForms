/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose } from "redux";

import { createBrowserHistory } from "history";

import createReducer from "../Reducer";

import middleware from "./Middleware";


const enhancers = [];

// if (process.env.NODE_ENV === 'development') {

// eslint-disable-next-line no-undef

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

// }

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export const history = createBrowserHistory();

// Configure the store

const initializeStore = () => {
  // createStore returns a plain object so we'll mess with it after creation.

  const store = createStore(
    // See rootReducer.createReducer for more info on this. Calling it without

    // a param creates a reducer with whatever is in rootReducer.

    createReducer,

    // NOTE: Don't put this in a prod build, just doing this for the demo.

    composedEnhancers
  );

  // Create an object for any later reducers`

  store.asyncReducers = {};

  // Creates a convenient method for adding reducers later

  // See withReducer.js for this in use.

  store.injectReducer = (key, reducer) => {
    // Updates the aysncReducers object. This ensures we don't remove any old

    // reducers when adding new ones.

    store.asyncReducers[key] = reducer;

    // This is the key part: replaceReducer updates the reducer

    // See rootReducer.createReducer for more details, but it returns a function.

    store.replaceReducer(createReducer(store.asyncReducers));

    return store;
  };

  return store;
};

const store = initializeStore();

export { store };
