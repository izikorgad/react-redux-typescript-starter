
import { AppActions } from './actions';
import { handleActions, Action } from 'redux-actions';

export interface AppState {
    msg: string;
}

const INITIAL_STATE: AppState = {
    msg: 'Hello from react!'
};

let reducerMap = {};


reducerMap[AppActions.DO_SOMETHING] = (state: AppState, action: Action<string>): AppState => {
    return { ...state, msg: action.payload };
};

export default handleActions<AppState, any>(reducerMap, INITIAL_STATE);