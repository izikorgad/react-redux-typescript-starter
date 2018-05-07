import * as React from "react";
import { Route, IndexRoute, Redirect, IndexRedirect } from "react-router/es";

import App from "components/App";
import HomePage from "components/HomePage";

export default (
  <Route name="Jethro" path="/" component={ App }>

    <IndexRoute component={ HomePage } />

  </Route >
);
