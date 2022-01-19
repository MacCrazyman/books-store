import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <li>
      <div>category</div>
      <div>
        {book.title}
      </div>
      <div>{book.author}</div>
      <div>comments</div>
      <button type="button" onClick={() => { deleteBook(book.id); }}>Remove</button>
      <div>Edit</div>
      <div>Percentage</div>
      <div>completed</div>
      <div>Current chapter</div>
      <div>chapter number</div>
      <button type="button">Update progress</button>
    </li>

  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
