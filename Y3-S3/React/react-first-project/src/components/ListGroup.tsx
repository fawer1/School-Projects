import { useState } from "react";

//Interface - define the structure and shape of an object --> type checking
interface Props {
  items: string[]; //array of strings
  heading: string; //string
}

function ListGroup({ items, heading }: Props) {
  // Hook - when this funtion is called it rerenders the component to show the change.
  const [selectedIndex, setSelectedIndex] = useState(-1); // -1 means no item is selected

  return (
    <>
      <h1>{heading}</h1>
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
            key={item} //key is a unique identifier required by React - it gives errors in the browser if we don't include it
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
        {/* In JSX we can't use dynamic elements, hence we use {} to wrap that
        dynamic elements so we can use it. */}
      </ul>
    </>
  );
}

export default ListGroup;
