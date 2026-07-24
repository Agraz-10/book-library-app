function BookCard({
  cover,
  title,
  author,
  category,
  price,
  rating,
  onEdit,
  onDelete,
}) {
  return (
    <article className="book-card">
      <div className="book-image">
        <img
          src={
            cover ||
            "https://via.placeholder.com/300x420?text=No+Cover"
          }
          alt={title}
        />

        <span className="category-badge">{category}</span>
      </div>

      <div className="book-content">
        <h3>{title}</h3>

        <p className="book-author">{author}</p>

        <div className="book-details">
          <div className="detail-item">
            <span>⭐</span>
            <strong>{rating}</strong>
          </div>

          <div className="detail-item">
            <span>💲</span>
            <strong>${price}</strong>
          </div>
        </div>

        <div className="card-buttons">
          <button className="edit-btn" onClick={onEdit}>
            ✏️ Edit
          </button>

          <button className="delete-btn" onClick={onDelete}>
            🗑 Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default BookCard;