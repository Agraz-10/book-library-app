import { useState } from "react";
import Header from "./components/Header";
import BookCard from "./components/BookCard";
import BookForm from "./components/BookForm";
import books from "./data/books";

function App() {
  const [bookList, setBookList] = useState(books);

  function addBook(newBook) {
    setBookList([...bookList, newBook]);
  }

  return (
    <>
      <Header />

      <BookForm addBook={addBook} />

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
    </>
  );
}

export default App;