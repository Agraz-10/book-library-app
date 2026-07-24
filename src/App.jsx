import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Header from "./components/Header";
import BookForm from "./components/BookForm";
import BookCard from "./components/BookCard";
import CategoryFilter from "./components/CategoryFilter";
import StatsCards from "./components/StatsCards";
import books from "./data/books";
import DeleteModal from "./components/DeleteModal";
import BookDetailsModal from "./components/BookDetailsModal";

function App() {
  const [bookList, setBookList] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : books;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("title");
  const [editingBook, setEditingBook] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(bookList));
  }, [bookList]);

  function saveBook(book) {
    if (editingBook) {
      const updatedBooks = bookList.map((item) =>
        item.id === book.id ? book : item
      );

      setBookList(updatedBooks);
      toast.success("Book updated successfully!");
      setEditingBook(null);
    } else {
      setBookList((previousBooks) => [...previousBooks, book]);
      toast.success("Book added successfully!");
    }
  }

  function deleteBook() {
    const updatedBooks = bookList.filter(
      (book) => book.id !== selectedBookId
    );

    setBookList(updatedBooks);
    toast.error("Book deleted.");

    if (
      editingBook &&
      editingBook.id === selectedBookId
    ) {
      setEditingBook(null);
    }

    setShowDeleteModal(false);
    setSelectedBookId(null);
  }

  function openDeleteModal(id) {
    setSelectedBookId(id);
    setShowDeleteModal(true);
  }

  function editBook(book) {
    setEditingBook(book);
  }

  function toggleFavorite(id) {
    const updatedBooks = bookList.map((book) =>
      book.id === id
        ? { ...book, favorite: !book.favorite }
        : book
    );

    setBookList(updatedBooks);
  }

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);

  const categories = [...new Set(bookList.map((book) => book.category))];

  const filteredBooks = bookList
    .filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        category === "All" || book.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);

        case "price":
          return a.price - b.price;

        case "rating":
          return b.rating - a.rating;

        default:
          return 0;
      }
    });

  const totalBooks = bookList.length;

  const totalCategories = new Set(
    bookList.map((book) => book.category)
  ).size;

  const averageRating =
    totalBooks === 0
      ? "0.0"
      : (
        bookList.reduce((sum, book) => sum + book.rating, 0) / totalBooks
      ).toFixed(1);

  const averagePrice =
    totalBooks === 0
      ? "0.00"
      : (
        bookList.reduce((sum, book) => sum + book.price, 0) / totalBooks
      ).toFixed(2);

  return (
    <>
      <Header totalBooks={totalBooks} />

      <main className="container">
        <div className="dashboard">
          <aside className="sidebar">
            <BookForm
              saveBook={saveBook}
              editingBook={editingBook}
            />
          </aside>

          <section className="content">
            <div className="control-panel">
              <input
                type="text"
                className="search-input"
                placeholder="🔍 Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <CategoryFilter
                category={category}
                setCategory={setCategory}
                categories={categories}
              />

              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="title">Sort by Title</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>

            <StatsCards
              totalBooks={totalBooks}
              totalCategories={totalCategories}
              averageRating={averageRating}
              averagePrice={averagePrice}
            />

            <h2 className="section-title">
              My Library ({filteredBooks.length})
            </h2>

            {filteredBooks.length === 0 ? (
              <p className="empty-message">📚 No books found.</p>
            ) : (
              <div className="book-grid">
                {filteredBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    cover={book.cover}
                    title={book.title}
                    author={book.author}
                    category={book.category}
                    price={book.price}
                    rating={book.rating}
                    favorite={book.favorite}
                    onToggleFavorite={() => toggleFavorite(book.id)}
                    onEdit={() => editBook(book)}
                    onDelete={() => openDeleteModal(book.id)}
                    onView={() => setSelectedBook(book)}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedBookId(null);
        }}
        onConfirm={deleteBook}
      />

      <BookDetailsModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />
    </>
  );
}

export default App;