const Book = (props) => {
  const { img, title, author, idx } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <br />
      <span className="idx">{`# ${idx + 1}`}</span>
    </article>
  );
};
export default Book;
