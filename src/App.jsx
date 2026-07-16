import Header from "./components/Header";
import BookCard from "./components/BookCard";

function App() {
  return (
    <>
      <Header />

      <BookCard
        cover="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300"
        title="Atomic Habits"
        author="James Clear"
        category="Self Help"
        price={15.99}
        rating={4.8}
      />
    </>
  );
}

export default App;