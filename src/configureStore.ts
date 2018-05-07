// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { createStore, compose, applyMiddleware } from "redux";
import { browserHistory, hashHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { rootReducer } from "app_redux";

const middleware = applyMiddleware(thunk, routerMiddleware(hashHistory));


export default function configureStore() {
  let store;

  if (process.env.NODE_ENV === "production") {
    console.log("Running on production environments");
    store = createStore(rootReducer, {}, middleware);
  }
  else {
    console.log("Running on dev environments");
    let devtools: any = window["devToolsExtension"] ? window["devToolsExtension"]() : (f: any) => f;

    store = createStore(rootReducer, {}, compose(
      middleware,
      window["devToolsExtension"] ? window["devToolsExtension"]() : f => f // add support for Redux dev tools
    )
    );
  }

  // if (process.env.NODE_ENV !== "production" && module[ "hot" ]) {
  //   // Enable Webpack hot module replacement for reducers
  //   module[ "hot" ].accept("./reducers/index.ts", () => {
  //     const nextReducer = require("reducers").default;
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}
