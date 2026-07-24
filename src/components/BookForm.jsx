function BookCard(props) {
  return (
    <div className="book-card">
      <img
        src={
          props.cover ||
          "https://via.placeholder.com/300x400?text=No+Cover"
        }
        alt={props.title}
        className="book-cover"
      />

      <div className="book-info">
        <h3>{props.title}</h3>

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

        <div className="card-buttons">
          <button
            className="edit-btn"
            onClick={props.onEdit}
          >
            ✏️ Edit
          </button>

          <button
            className="delete-btn"
            onClick={props.onDelete}
          >
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;