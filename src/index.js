import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {books} from './books';
import Book from './Book';

const EventExamples = () => {
  const handleButtonClick = () => {
    alert('Handle Button Click');
  };

  const handleFormInput = (e) => {
    console.log(`Handle Form Input: ${e.target.name}`)
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(`Form Submitted`);
  };

  return (
    <section>
      <button onClick={handleButtonClick}>Click me!</button>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input type='text' name='example' onChange={handleFormInput} style={{ margin: '1rem 0'}} />
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

function BookList() {
  const getBook = (id) => {
    const bookInfo = books.find((book) => book.id === id);
    console.log(bookInfo);
  };

  return (
    <>
      <section className='main'>
        <h1>Best Selling Books</h1>
        <p>Our most popular products based on sales.</p>
      </section>
      {/* <EventExamples /> */}
      {/* Rendering Lists - Use Map */}
      <section className="booklist">
        {books.map((book) => {
          // destructuring the book
          const { id, imgSrc, title, author} = book;
          return (
            <Book 
              key={id}
              id={id}
              imgSrc={imgSrc}
              title={title}
              author={author}
              getBook={getBook}
            />
          );
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);