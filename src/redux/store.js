import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { authSlice } from './auth/authReducer';
// console.log(authSlice)

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
