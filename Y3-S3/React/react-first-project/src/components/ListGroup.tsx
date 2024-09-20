function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  const message = items.length === 0 ? <p>No items found.</p> : null; //Keeps the code clean

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No items found.</p>;
      </>
    );

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        {/* In JSX we can't use dynamic elements, hence we use {} to wrap that
        dynamic elements so we can use it. */}
      </ul>
    </>
  );
}

export default ListGroup;
