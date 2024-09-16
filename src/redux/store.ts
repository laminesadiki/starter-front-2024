import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';
import { backendServerApi } from '@redux/api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { PreloadedState } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
   userReducer,
   [backendServerApi.reducerPath]: backendServerApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
   return configureStore({
      reducer: rootReducer,
      middleware: getDefaultMiddleware =>
         getDefaultMiddleware().concat(backendServerApi.middleware),
      preloadedState,
   });
};

export const store = setupStore();

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
