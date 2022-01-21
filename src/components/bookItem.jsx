import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './bookItem.css';
import progressIcon from '../img/progressIcon.PNG';

const appKey = 'uhDrozhDK5K3sfDSAsYf';
const APIurl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const booksEndpoint = `${APIurl}/${appKey}/books/`;

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    fetch(`${booksEndpoint}${id}`, { method: 'DELETE' }).then(() => {
      dispatch(removeBook(id));
    });
  };
  return (
    <li className="bookItem">
      <div className="infoSection">
        <div className="category">{book.category}</div>
        <div className="title">
          {book.title}
        </div>
        <div className="author">Author</div>
        <div className="buttons">
          <div className="commentButton smoothLink">comments</div>
          |
          <button className="removeButton smoothLink" type="button" onClick={() => { deleteBook(book.item_id); }}>Remove</button>
          |
          <div className="EditButton smoothLink">Edit</div>
        </div>
      </div>
      <div className="progressIndicator">
        <div className="percentageLogo"><img src={progressIcon} alt="Progress indicator" /></div>
        <div className="percentageNumber">64%</div>
        <div className="percentageLabel">completed</div>
      </div>
      <div className="separator" />
      <div className="chapterSection">
        <div className="chapterLabel">Current chapter</div>
        <div className="currentChapter">chapter number</div>
        <button className="updateProgressButton" type="button">Update progress</button>
      </div>
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
