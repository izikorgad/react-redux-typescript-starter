import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createHashHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import rootSaga from './sagas';
import rootReducer from './reducers';

export const history = createHashHistory();

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, routerMiddleware(history));

export default function configureStore() {
    let store;

    if (process.env.NODE_ENV === 'production') {
        console.debug('Running on production environments');
        store = createStore(connectRouter(history)(rootReducer), {}, compose(middleware, f => f));
    }
    else {
        console.debug('Running on dev environments');
        const devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f; // add support for Redux dev tools

        store = createStore(connectRouter(history)(rootReducer), {}, compose(middleware, devtools));
    }

    sagaMiddleware.run(rootSaga);

    if (process.env.NODE_ENV !== 'production' && module['hot']) {
        // Enable Webpack hot module replacement for reducers
        module['hot'].accept('./reducers.ts', () => {
            const nextReducer = require('./reducers.ts').default;
            store.replaceReducer(nextReducer);
        });
    }


    return store;
}