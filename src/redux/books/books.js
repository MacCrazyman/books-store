// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const RETREIVE_BOOKS = 'bookStore/books/RETREIVE_BOOKS';

const initialState = [];
// Reducer
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state].filter((book) => book.item_id !== action.payload);
    case RETREIVE_BOOKS:
      return action.payload;
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

export const retreiveBooks = (payload) => {
  const booksArray = Object.entries(payload).map((book) => ({ item_id: book[0], ...book[1][0] }));
  return (
    {
      type: RETREIVE_BOOKS,
      payload: booksArray,
    }
  );
};
