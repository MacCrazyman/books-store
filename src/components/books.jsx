import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import Book from './bookItem';

const dispatch = useDispatch();

const submitBook = () => {
  const newBook = {
    id:1,
    title:'new book',
    author: 'Leonardo Pareja',
  }
  dispatch(addBook(newBook))
};

const Books = () => (
  <div className="appContainer">
    <ul className="booksList">
      <Book />
    </ul>
    <div className="appFooter">
      <form onSubmit={submitBook}>
        <label htmlFor="bookTitle">
          ADD NEW BOOK
          <input placeholder="Book title" type="text" required name="bookTitle" id="bookTitle" />
        </label>
        <input list="categories" placeholder="Category" required />
        <datalist id="categories">
          <option value="cat1">cat1</option>
          <option value="cat2">cat2</option>
          <option value="cat3">cat3</option>
        </datalist>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  </div>
);

export default Books;
