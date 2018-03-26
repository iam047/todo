import { combineReducers } from 'redux';
import todoReducer from './todos';

const reducers = combineReducers({
    todoReducer
});

export default reducers;