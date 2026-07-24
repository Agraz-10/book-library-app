function Header({ totalBooks }) {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1>📚 Book Library</h1>
          <p>Manage and organize your personal book collection.</p>
        </div>

        <div className="header-stats">
          <span>Total Books</span>
          <h2>{totalBooks}</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;