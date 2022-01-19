import { useSelector } from 'react-redux';

const Book = () => {
  const library = useSelector((state) => state.library);
  return (
    library.map((book) => (
      <li key={book.id}>
        <div>category</div>
        <div>
          {book.title}
        </div>
        <div>{book.author}</div>
        <div>comments</div>
        <div>Remove</div>
        <div>Edit</div>
        <div>Percentage</div>
        <div>completed</div>
        <div>Current chapter</div>
        <div>chapter number</div>
        <button type="button">Update progress</button>
      </li>
    ))
  );
};

export default Book;
