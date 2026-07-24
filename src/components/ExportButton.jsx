function ExportButton({ books }) {
  function exportCSV() {
    if (books.length === 0) return;

    const headers = [
      "Title",
      "Author",
      "Category",
      "Price",
      "Rating",
      "Favorite",
    ];

    const rows = books.map((book) => [
      book.title,
      book.author,
      book.category,
      book.price,
      book.rating,
      book.favorite ? "Yes" : "No",
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "library.csv";

    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <button
      className="export-btn"
      onClick={exportCSV}
    >
      📄 Export CSV
    </button>
  );
}

export default ExportButton;