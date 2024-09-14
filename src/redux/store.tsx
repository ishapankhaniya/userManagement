import {persistStore, persistReducer} from 'redux-persist';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {useDispatch} from 'react-redux';
import {thunk} from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserReducer from './reducers/UserReducer';

/* combile reducers */

const rootReducer: any = combineReducers({
  userReducer: UserReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const middleware: any = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware),
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type TypedDispatch = typeof store.dispatch;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
