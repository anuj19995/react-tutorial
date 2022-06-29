import React from "react";

const Book = (props: any) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert("Hello World");
  };

  const complexExample = (author: any) => {
    console.log(author);
  };

  return (
    <article
      className="books"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Press me
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

export default Book;
