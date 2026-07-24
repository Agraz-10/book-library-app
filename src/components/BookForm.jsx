import { useEffect, useState } from "react";

function BookForm({ saveBook, editingBook }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    rating: "",
    cover: "",
  });

  useEffect(() => {
    if (editingBook) {
      setFormData({
        title: editingBook.title,
        author: editingBook.author,
        category: editingBook.category,
        price: editingBook.price,
        rating: editingBook.rating,
        cover: editingBook.cover,
      });
    } else {
      setFormData({
        title: "",
        author: "",
        category: "",
        price: "",
        rating: "",
        cover: "",
      });
    }
  }, [editingBook]);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    saveBook({
      id: editingBook ? editingBook.id : Date.now(),
      title: formData.title,
      author: formData.author,
      category: formData.category,
      price: Number(formData.price),
      rating: Number(formData.rating),
      cover: formData.cover,
    });

    setFormData({
      title: "",
      author: "",
      category: "",
      price: "",
      rating: "",
      cover: "",
    });
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <span>📖 Library Manager</span>

        <h2>{editingBook ? "Edit Book" : "Add New Book"}</h2>

        <p>
          {editingBook
            ? "Update the selected book."
            : "Fill in the details to add a new book."}
        </p>
      </div>

      <div className="form-group">
        <label>Book Title</label>
        <input
          type="text"
          name="title"
          placeholder="Atomic Habits"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          name="author"
          placeholder="James Clear"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          name="category"
          placeholder="Programming"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>

      <div className="double-input">
        <div className="form-group">
          <label>Price ($)</label>
          <input
            type="number"
            name="price"
            placeholder="25"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <input
            type="number"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            placeholder="4.8"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Cover Image URL</label>
        <input
          type="text"
          name="cover"
          placeholder="https://example.com/book.jpg"
          value={formData.cover}
          onChange={handleChange}
        />
      </div>

      <button className="submit-btn" type="submit">
        {editingBook ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}

export default BookForm;