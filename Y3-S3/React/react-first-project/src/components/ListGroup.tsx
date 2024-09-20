function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1>List</h1>
      {/*If the condition is true, return the paragraph.*/}
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(e) => console.log(e)}
          >
            {item}
          </li> //key is a unique identifier required by React - it gives errors in the browser if we don't include it
        ))}
        {/* In JSX we can't use dynamic elements, hence we use {} to wrap that
        dynamic elements so we can use it. */}
      </ul>
    </>
  );
}

export default ListGroup;
