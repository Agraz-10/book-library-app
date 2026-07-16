function CategoryFilter({ category, setCategory, categories }) {
  return (
    <select
      className="category-filter"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="All">All Categories</option>

      {categories.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;