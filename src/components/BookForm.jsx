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
    setFormData(
      editingBook
        ? {
            title: editingBook.title,
            author: editingBook.author,
            category: editingBook.category,
            price: editingBook.price,
            rating: editingBook.rating,
            cover: editingBook.cover,
          }
        : {
            title: "",
            author: "",
            category: "",
            price: "",
            rating: "",
            cover: "",
          }
    );
  }, [editingBook]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

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
    <form onSubmit={handleSubmit}>
      <h2>{editingBook ? "Edit Book" : "Add New Book"}</h2>

      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="rating"
        step="0.1"
        min="0"
        max="5"
        placeholder="Rating"
        value={formData.rating}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="cover"
        placeholder="Book Cover URL"
        value={formData.cover}
        onChange={handleChange}
      />

      <button type="submit">
        {editingBook ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}

export default BookForm;