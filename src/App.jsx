import { useEffect, useState } from "react";
import Header from "./components/Header";
import BookForm from "./components/BookForm";
import BookCard from "./components/BookCard";
import CategoryFilter from "./components/CategoryFilter";
import books from "./data/books";

function App() {
  const [bookList, setBookList] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : books;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(bookList));
  }, [bookList]);

  function addBook(newBook) {
    setBookList([...bookList, newBook]);
  }

  function deleteBook(id) {
    const updatedBooks = bookList.filter((book) => book.id !== id);
    setBookList(updatedBooks);
  }

  // Create a unique list of categories
  const categories = [...new Set(bookList.map((book) => book.category))];

  // Filter books
  const filteredBooks = bookList.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || book.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header totalBooks={bookList.length} />

      <main className="container">
        <div className="dashboard">
          <aside className="sidebar">
            <BookForm addBook={addBook} />
          </aside>

          <section className="content">
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