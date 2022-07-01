import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducers';

export const store = configureStore({
  reducer: {
    global: cityReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
