function Book({imgSrc, title, author, children, getBook, id}) {
  // setup wrapper
  const getSingleBook = () => {
    getBook(id);
  };

  return (
    <article className='book'>
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={getSingleBook}>Get Book ID</button>
      {children}
    </article>
  )
}

export default Book;
