import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware()));

export default ({ children, initialState = {} }) => (
  <Provider store={createStore(reducers, initialState)}>{children}</Provider>
);
