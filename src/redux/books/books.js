// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [{
  id: 0,
  title: 'book 1',
  author: 'Lio',
}];
// Reducer
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
      // case REMOVE_BOOK:

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
