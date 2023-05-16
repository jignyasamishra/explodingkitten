import { combineReducers } from 'redux';
import cardReducer from './Reducers/cardReducer';
export default combineReducers({ card: cardReducer });