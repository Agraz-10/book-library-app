import { useEffect, useState } from "react";
import Header from "./components/Header";
import BookForm from "./components/BookForm";
import BookCard from "./components/BookCard";
import books from "./data/books";

function App() {
  const [bookList, setBookList] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : books;
  });

  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredBooks = bookList.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />

      <main className="container">
        <BookForm addBook={addBook} />

        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <h2 className="section-title">My Library</h2>

        {filteredBooks.length === 0 ? (
          <p className="empty-message">
            📚 No books found. Try another search or add a new book.
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
      </main>
    </>
  );
}

export default App;