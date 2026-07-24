import { useEffect, useState } from "react";
import Header from "./components/Header";
import BookForm from "./components/BookForm";
import BookCard from "./components/BookCard";
import CategoryFilter from "./components/CategoryFilter";
import books from "./data/books";
import StatsCards from "./components/StatsCards";

function App() {
  const [bookList, setBookList] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : books;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("title");

  // Stores the book currently being edited
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(bookList));
  }, [bookList]);

  function saveBook(book) {
    if (editingBook) {
      const updatedBooks = bookList.map((item) =>
        item.id === book.id ? book : item
      );

      setBookList(updatedBooks);
      setEditingBook(null);
    } else {
      setBookList([...bookList, book]);
    }
  }

  function deleteBook(id) {
    const updatedBooks = bookList.filter((book) => book.id !== id);
    setBookList(updatedBooks);

    if (editingBook && editingBook.id === id) {
      setEditingBook(null);
    }
  }

  function editBook(book) {
    setEditingBook(book);
  }

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

  return (
    <>
      <Header totalBooks={bookList.length} />

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
              <p className="empty-message">
                📚 No books found.
              </p>
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
                    onDelete={() => deleteBook(book.id)}
                    onEdit={() => editBook(book)}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;