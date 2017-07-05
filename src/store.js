import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './reducers/homeReducer';
import postReducer from './reducers/postReducer';
export default createStore(
    combineReducers({homeReducer,postReducer}),
    {},
    applyMiddleware(thunk)
);