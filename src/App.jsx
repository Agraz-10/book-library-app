import { useEffect, useState } from "react";
import Header from "./components/Header";
import BookCard from "./components/BookCard";
import BookForm from "./components/BookForm";
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

      <BookForm addBook={addBook} />

      {bookList.length === 0 ? (
        <p>No books found. Add your first book!</p>
      ) : (
        bookList.map((book) => (
          <BookCard
            key={book.id}
            cover={book.cover}
            title={book.title}
            author={book.author}
            category={book.category}
            price={book.price}
            rating={book.rating}
          />
        ))
      )}
    </>
  );
}

export default App;