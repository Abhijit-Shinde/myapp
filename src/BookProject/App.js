import { useState, useEffect } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    let response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  //https://codepen.io/sgrider/pen/BarEowz?editors=0011

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBook = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const handleCreateBook = async (title) => {
    let response = await axios.post("http://localhost:3001/books", {
      title, //as key value are same so specify once
    });

    const book = [...books, response.data];
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
