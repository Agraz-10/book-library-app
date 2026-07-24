function BookDetailsModal({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="details-overlay">
      <div className="details-modal">
        <button
          className="close-modal-btn"
          onClick={onClose}
        >
          ✖
        </button>

        <div className="details-content">
          <div className="details-image">
            <img
              src={
                book.cover ||
                "https://via.placeholder.com/350x500?text=No+Cover"
              }
              alt={book.title}
            />
          </div>

          <div className="details-info">
            <span className="details-category">
              {book.category}
            </span>

            <h2>{book.title}</h2>

            <h4>by {book.author}</h4>

            <div className="details-stats">
              <p>
                <strong>⭐ Rating:</strong> {book.rating}
              </p>

              <p>
                <strong>💲 Price:</strong> ${book.price}
              </p>

              <p>
                <strong>❤️ Favorite:</strong>{" "}
                {book.favorite ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailsModal;