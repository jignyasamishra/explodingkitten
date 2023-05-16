import { applyMiddleware } from 'redux';
import { configureStore,createSlice } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
const middleware = [thunk];

const store = configureStore({reducer:rootReducer}, applyMiddleware(...middleware));
export default store;