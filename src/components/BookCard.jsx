function BookCard({
  cover,
  title,
  author,
  category,
  price,
  rating,
  favorite,
  onToggleFavorite,
  onEdit,
  onDelete,
  onView,
}) {
  return (
    <article className="book-card" onClick={onView}>
      <div className="book-image">
        <img
          src={
            cover ||
            "https://via.placeholder.com/300x420?text=No+Cover"
          }
          alt={title}
        />

        <span className="category-badge">{category}</span>

        <button
          className="favorite-btn"
          onClick={(event) => {
            event.stopPropagation();
            onToggleFavorite();
          }}
        >
          {favorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="book-content">
        <h3>{title}</h3>

        <p className="book-author">{author}</p>

        <div className="book-details">
          <div className="detail-item">
            ⭐ <strong>{rating}</strong>
          </div>

          <div className="detail-item">
            💲 <strong>${price}</strong>
          </div>
        </div>

        <div className="card-buttons">
          <button
            className="edit-btn"
            onClick={(event) => {
              event.stopPropagation();
              onEdit();
            }}
          >
            ✏️ Edit
          </button>

          <button
            className="delete-btn"
            onClick={(event) => {
              event.stopPropagation();
              onDelete();
            }}
          >
            🗑 Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default BookCard;