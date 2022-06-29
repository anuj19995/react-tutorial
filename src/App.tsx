import React, { Key } from "react";
import { books } from "./books";
import Book from "./Book";

const names = ["Anuj", "Gangwar", "Full Stack developer"];
const newname = names.map((name) => {
  return name;
});
const BookList = () => (
  <section className="bookLists">
    {books.map((book) => {
      return <Book key={book.id} {...book} />;
    })}
  </section>
);

export default BookList;
function obj(obj: any): React.ReactNode {
  throw new Error("Function not implemented.");
}
