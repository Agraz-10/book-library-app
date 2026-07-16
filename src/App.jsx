import Header from "./components/Header";
import BookCard from "./components/BookCard";
import books from "./data/books";

function App() {
  return (
    <>
      <Header />

      {books.map((book) => (
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