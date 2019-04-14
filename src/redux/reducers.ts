import { combineReducers } from 'redux';
import appReducer from 'components/App/redux/reducer';

const rootReducer = combineReducers({
    app: appReducer,
});

export default rootReducer;