import {combineReducers} from 'redux';
import { bookReducer } from './bookReducer';

export const reducers = combineReducers({
    allBooks:bookReducer,
})

    // default reducers;
