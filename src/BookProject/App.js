import { useState } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBook = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const handleCreateBook = (title) => {
    const book = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];
    setBooks(book);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate onCreate={handleCreateBook} />
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
    </div>
  );
}

export default App;
