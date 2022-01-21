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
      <div>{book.category}</div>
      <div>
        {book.title}
      </div>
      <div>Author</div>
      <div>comments</div>
      <button type="button" onClick={() => { deleteBook(book.item_id); }}>Remove</button>
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
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
