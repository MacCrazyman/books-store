import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const reducer = combineReducers({
  library: booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
