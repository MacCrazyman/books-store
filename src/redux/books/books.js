const appKey = 'uhDrozhDK5K3sfDSAsYf';
const APIurl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];
// Reducer
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state].filter((book) => book.id !== action.payload);
    //   break;
    default: return state;
  }
}

// Action Creators

export const addBook = (payload) => (
  {
    type: ADD_BOOK,
    payload,
  }
);

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
