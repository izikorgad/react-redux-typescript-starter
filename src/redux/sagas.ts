import { AppSagas } from 'components/App/redux/sagas';
import {all } from 'redux-saga/effects';

export default function* rootSaga(): any {
    yield all([
        AppSagas(),
    ]);

}