import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, hashHistory } from "react-router";
import routes from "routes";
import { syncHistoryWithStore } from "react-router-redux";
import configureStore from "configureStore";


const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById("app")
);
