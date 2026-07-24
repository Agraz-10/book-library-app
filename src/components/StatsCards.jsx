function StatsCards({ totalBooks, totalCategories, averageRating, averagePrice }) {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <span>📚</span>
        <h2>{totalBooks}</h2>
        <p>Total Books</p>
      </div>

      <div className="stat-card">
        <span>📂</span>
        <h2>{totalCategories}</h2>
        <p>Categories</p>
      </div>

      <div className="stat-card">
        <span>⭐</span>
        <h2>{averageRating}</h2>
        <p>Average Rating</p>
      </div>

      <div className="stat-card">
        <span>💲</span>
        <h2>${averagePrice}</h2>
        <p>Average Price</p>
      </div>
    </div>
  );
}

export default StatsCards;