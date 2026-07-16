function BookCard(props) {
  return (
    <div className="book-card">
      <img
        src={props.cover}
        alt={props.title}
        className="book-cover"
      />

      <h2>{props.title}</h2>

      <p>
        <strong>Author:</strong> {props.author}
      </p>

      <p>
        <strong>Category:</strong> {props.category}
      </p>

      <p>
        <strong>Price:</strong> ${props.price}
      </p>

      <p>
        <strong>Rating:</strong> ⭐ {props.rating}
      </p>
    </div>
  );
}

export default BookCard;