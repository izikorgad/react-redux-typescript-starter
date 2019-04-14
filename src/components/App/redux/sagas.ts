
import { AppActions } from './actions';
import { takeEvery, all, put } from 'redux-saga/effects';


function* doSomethingAsync(action) {
    yield console.log(`Dispatching action: ${action.type}, with payload: ${action.payload}`);
}


export function* AppSagas() {
    return yield all([
        takeEvery(AppActions.DO_SOMETHING, doSomethingAsync),
    ]);
}