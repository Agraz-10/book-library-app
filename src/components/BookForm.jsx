function BookForm() {
  return (
    <form>
      <h2>Add New Book</h2>

      <input
        type="text"
        placeholder="Book Title"
      />

      <input
        type="text"
        placeholder="Author"
      />

      <input
        type="text"
        placeholder="Category"
      />

      <input
        type="number"
        placeholder="Price"
      />

      <input
        type="number"
        step="0.1"
        placeholder="Rating"
      />

      <input
        type="text"
        placeholder="Book Cover URL"
      />

      <button type="submit">
        Add Book
      </button>
    </form>
  );
}

export default BookForm;