import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../redux/books/books';
import Book from './bookItem';

const appKey = 'uhDrozhDK5K3sfDSAsYf';
const APIurl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const booksEndpoint = `${APIurl}/${appKey}/books/`;

const Books = () => {
  const library = useSelector((store) => store.library);
  const dispatch = useDispatch();
  const submitBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: v4(),
      title: e.target.bookTitle.value,
      author: 'Leonardo Pareja',
    };
    fetch(booksEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        item_id: newBook.id,
        title: e.target.bookTitle.value,
        category: 'Fiction',
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then(() => {
      dispatch(addBook(newBook));
      e.target.bookTitle.value = '';
      e.target.categories.value = '';
    });
  };

  return (

    <div className="appContainer">
      <ul className="booksList">
        {library.map((book) => (<Book book={book} key={book.id} />))}
      </ul>
      <div className="appFooter">
        <form onSubmit={submitBook}>
          <label htmlFor="bookTitle">
            ADD NEW BOOK
            <input placeholder="Book title" type="text" required name="bookTitle" id="bookTitle" />
          </label>
          <input list="categories" placeholder="Category" required name="categories" />
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
};

export default Books;
