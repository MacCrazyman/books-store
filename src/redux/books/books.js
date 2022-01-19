// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];
// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:

    case REMOVE_BOOK:


    default: return state;
  }
}

// Action Creators

export const addBook = (payload) => (
  {
    type: ADD_BOOK,
    payload
  }
)

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload
})
