const Books = () => (
  <div className="appContainer">
    <ul className="booksList">
      empty
    </ul>
    <div className="appFooter">
      <form>
        <label htmlFor="bookTitle">
          ADD NEW BOOK
          <input placeholder="Book title" type="text" required name="bookTitle" id="bookTitle" />
        </label>
        <input placeholder="Category" required />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  </div>
);

export default Books;
