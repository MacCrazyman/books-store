import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook, retreiveBooks } from '../redux/books/books';
import Book from './bookItem';
import './books.css';

const appKey = 'uhDrozhDK5K3sfDSAsYf';
const APIurl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const booksEndpoint = `${APIurl}/${appKey}/books/`;

const Books = () => {
  const library = useSelector((store) => store.library);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(booksEndpoint, {
      method: 'GET',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => response.json()).then((response) => {
      dispatch(retreiveBooks(response));
    });
  }, []);

  const submitBook = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: v4(),
      title: e.target.bookTitle.value,
      category: e.target.category.value,
    };
    fetch(booksEndpoint, {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then(() => {
      dispatch(addBook(newBook));
      e.target.bookTitle.value = '';
      e.target.category.value = '';
    });
  };

  return (

    <div className="appContainer">
      <ul className="booksList dflex">
        {library.map((book) => (<Book book={book} key={book.item_id} />))}
      </ul>
      <div className="appFooter dflex">
        <form onSubmit={submitBook}>
          <label htmlFor="bookTitle" className="formTitle">
            <p id="formLabel">ADD NEW BOOK</p>
            <input placeholder="Book title" type="text" required name="bookTitle" id="bookTitle" />
          </label>
          <input list="categories" placeholder="Category" required name="categories" id="category" />
          <datalist id="categories">
            <option value="cat1">cat1</option>
            <option value="cat2">cat2</option>
            <option value="cat3">cat3</option>
          </datalist>
          <button id="submitBook" type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};

export default Books;
