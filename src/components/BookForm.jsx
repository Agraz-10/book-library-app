import { useState } from "react";

function BookForm() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [cover, setCover] = useState("");
    return (
        <form>
            <h2>Add New Book</h2>

            <input
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />

            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <input
                type="number"
                step="0.1"
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />

            <input
                type="text"
                placeholder="Book Cover URL"
                value={cover}
                onChange={(e) => setCover(e.target.value)}
            />

            <button type="submit">
                Add Book
            </button>
        </form>
    );
}

export default BookForm;