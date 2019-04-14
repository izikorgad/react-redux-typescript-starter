import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from 'redux/configureStore';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import App from 'components/App';


const store = configureStore();

render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Route component={ App } />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

