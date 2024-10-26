import { combineReducers, createStore } from 'redux';
import cartReducer from './cartReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import langReducer from './langReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  lang: langReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
