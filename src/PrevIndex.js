import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// React Components
// Start with Capital letter
// Must return something
// JSX syntax (return html) - to make our lives easier, but it calls React.createElement function under the hood

// const title = 'The Let Them Theory';
// const author = 'Mel Robbins';
// const imgSrc = 'https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg';

// In React 18, not need to import react when we create seperate compinent file

// const firstBook = {
//   title: 'The Let Them Theory',
//   author: 'Mel Robbins',
//   imgSrc: 'https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg'
// };

// const secondBook = {
//   author: 'Dr. Nicole Apelian',
//   title: 'Forgotten Home Apothecary',
//   imgSrc: 'https://m.media-amazon.com/images/I/91-E86oM2IL._SY342_.jpg'
// };

// Combining the firstBook and secondBook into a single list
// This is in general how the data is organized
const books = [
  { 
    id: 1,
    title: 'The Let Them Theory',
    author: 'Mel Robbins',
    imgSrc: 'https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg'
  },
  {
    id: 2,
    author: 'Dr. Nicole Apelian',
    title: 'Forgotten Home Apothecary',
    imgSrc: 'https://m.media-amazon.com/images/I/91-E86oM2IL._SY342_.jpg',
  },
  {
    id: 3,
    author: 'James Clear',
    title: 'Atomic Habits',
    imgSrc: 'https://m.media-amazon.com/images/I/81ANaVZk5LL._SL1500_.jpg',
  }
];

// Handling events in React
const EventExamples = () => {
  const handleButtonClick = () => {
    alert('Handle Button Click');
  };

  const handleFormInput = (e) => {
    console.log(`Handle Form Input: ${e.target.name}`)
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    // e.preventDefault() - It prevents the default action of the form submission, which is refreshing the page.
    console.log(`Form Submitted`);
  };

  return (
    <section>
      <button onClick={handleButtonClick}>Click me!</button>
      {/* Alternative approach - pass anonymous function (in this case arrow function)*/}
      {/* <button onClick={() => console.log('hello there')}>Click me!</button> */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input type='text' name='example' onChange={handleFormInput} style={{ margin: '1rem 0'}} />
        {/* add button with type='submit' */}
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
    // <section className='booklist'>
    //   <Book title={firstBook.title} author={firstBook.author} imgSrc={firstBook.imgSrc}>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium saepe ipsa commodi tempore, dolorum doloribus corporis nulla non recusandae, autem quisquam eius. Recusandae obcaecati voluptatum hic rem quod aperiam voluptates!</p>
    //   </Book>
    //   <Book title={secondBook.title} author={secondBook.author} imgSrc={secondBook.imgSrc}/>
    //   <Book />
    // </section>
    
    <>
      <section className='main'>
        <h1>Best Selling Books</h1>
        <p>Our most popular products based on sales.</p>
      </section>
      <EventExamples />
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
          // For the spread operator syntax, since we are passing book object, need to use props and then destructure - const { img, title, author } = props.book in the Book component
          // return (
          //   <Book 
          //     key={book.id}
          //     {...book}
          //   />
          // );
        })}
      </section>
    </>
  )
}

// Props allow us reuse a component's logic dynamically. This means that the data in the component will not be static. So for every other component using that logic, its data can be modified to fit the requirements.

// Prop drilling refers to the process of passing down props through multiple layers of components, even when some of those components do not directly use the props.

// Consider a scenario where you have a top-level component that fetches data from an API and needs to pass this data down to multiple nested child components.

// Instead of directly passing the data to each child component, you pass it through each intermediary component in the hierarchy until it reaches the desired child component. 

function Book({imgSrc, title, author, children, getBook, id}) {
  // setup wrapper
  const getSingleBook = () => {
    getBook(id);
  };

  // or use an anonymous function on the button
  return (
    <article className='book'>
      {/* <Image /> */}
      {/* <Title /> */}
      {/* <Author /> */}

      {/* Wrapping all in single Book component */}
      {/* Can only pass static data */}
      {/* <img src={imgSrc} alt={title} /> */}
      {/* <h2>{title}</h2> */}
      {/* <h4>{author.toUpperCase()}</h4> */}

      {/* Using Props - setting dynamic values */}
      {/* This works when we pass props parameter in the component */}
      {/* <img src={props.imgSrc} alt={props.title} /> */}
      {/* <h2>{props.title}</h2> */}
      {/* <h4>{props.author}</h4> */}

      {/* Destructuring props */}
      {/* Pass props paramter and use 
        const { img, title, author, children } = props;  */}
      {/* or destructure on the parameter like above {imgSrc, title, author, children} */}
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* Cannot directky invoke the function with param id in React unlike JavaScript */}
      <button onClick={getSingleBook}>Get Book ID</button>
      {/* <button onClick={() => getBook(id)}>Get Book ID</button> */}
      {/* Want to pass additional props from the component - we can use children props
       */}
      {children}
    </article>
  )
}

// COMPONENTS - Components are independent by default which is extremely powerful concept, essentially all functionality refers to that specific element.

// INDIVIDUAL COMPONENTS
// const Image = () => {
//   return (
//     <img src="https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg" alt="The Let Them Theory" />
//   )
// }

// const Title = () => {
//   return (
//     <h2>The Let Them Theory</h2>
//   )
// }

// Applying CSS thorugh JSX - Inline CSS
// camelCase property naming convention

// const Author = () => {
//   return (
//     <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>Mel Robbins</h4>
//   )
// }

// Alternative option
// const Author = () => {
//   const inlineHeadingStyles = {
//     color: '#617d98',
//     fontSize: '0.75rem',
//     marginTop: '0.5rem',
//   };
//   return <h4 style={inlineHeadingStyles}>Mel Robbins Moore </h4>;
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);