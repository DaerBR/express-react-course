import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
