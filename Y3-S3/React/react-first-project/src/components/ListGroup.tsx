import { useState } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // Hook - when this funtion is called it rerenders the component to show the change.
  const [selectedIndex, setSelectedIndex] = useState(-1); // -1 means no item is selected

  return (
    <>
      <h1>List</h1>
      {/*If the condition is true, return the paragraph.*/}
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
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
