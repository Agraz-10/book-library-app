function Header({ totalBooks }) {
  return (
    <header className="header">
      <div className="header-overlay">
        <div className="header-left">
          <span className="header-badge">📚 Personal Library</span>

          <h1>Book Library Dashboard</h1>

          <p>
            Organize, manage, and discover your favorite books in one
            beautiful place.
          </p>
        </div>

        <div className="header-right">
          <div className="header-card">
            <span>Total Books</span>
            <h2>{totalBooks}</h2>
          </div>

          <div className="header-card">
            <span>Status</span>
            <h3>Active</h3>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;