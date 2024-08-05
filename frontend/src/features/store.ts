import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { usersApi } from './slices/apiSlice';
// import productReducer from './slices/productSlice';

export const rootReducer = combineReducers({
  // product: productReducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(usersApi.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export default setupStore;