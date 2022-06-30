// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import globalReducer from './global/global-reducer';
// import authReducer from './auth/auth-reducer';

// const middleware = getDefaultMiddleware({
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['token'],
// };

// const persistedReducer = persistReducer(persistConfig, authReducer);

// export const store = configureStore({
//   reducer: {
//     global: globalReducer,
//   },
//   middleware,
// });

// const persistor = persistStore(store);

// export default { store, persistor };

import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducers';

export const store = configureStore({
  reducer: {
    global: cityReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
