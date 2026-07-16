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

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(bookList));
  }, [bookList]);

  function addBook(newBook) {
    setBookList([...bookList, newBook]);
  }

  return (
    <>
      <Header />

      <main className="container">
        <BookForm addBook={addBook} />

        <h2 className="section-title">My Library</h2>

        {bookList.length === 0 ? (
          <p className="empty-message">
            📚 No books found. Add your first book!
          </p>
        ) : (
          <div className="book-grid">
            {bookList.map((book) => (
              <BookCard
                key={book.id}
                cover={book.cover}
                title={book.title}
                author={book.author}
                category={book.category}
                price={book.price}
                rating={book.rating}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default App;