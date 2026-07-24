function StatsCards({
  totalBooks,
  totalCategories,
  averageRating,
  averagePrice,
}) {
  const stats = [
    {
      icon: "📚",
      title: "Total Books",
      value: totalBooks,
      color: "blue",
    },
    {
      icon: "📂",
      title: "Categories",
      value: totalCategories,
      color: "green",
    },
    {
      icon: "⭐",
      title: "Average Rating",
      value: averageRating,
      color: "yellow",
    },
    {
      icon: "💲",
      title: "Average Price",
      value: `$${averagePrice}`,
      color: "purple",
    },
  ];

  return (
    <section className="stats-grid">
      {stats.map((stat) => (
        <div className={`stat-card ${stat.color}`} key={stat.title}>
          <div className="stat-icon">{stat.icon}</div>

          <div className="stat-info">
            <h2>{stat.value}</h2>
            <p>{stat.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default StatsCards;