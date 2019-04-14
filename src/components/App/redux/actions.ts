
import { createAction } from 'redux-actions';

export const AppActions = {
    DO_SOMETHING: 'APP/DO_SOMETHING',
};

export const doSomething = createAction(AppActions.DO_SOMETHING, (msg: string) => msg);
