import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="bookList">
        {books.map((book, index) => {
          // const { img, title, author, id } = book;
          return <Book {...book} key={book.id} idx={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
