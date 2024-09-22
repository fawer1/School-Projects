import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>That's crazy</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        Click Me
      </Button>
      <Button onClick={() => console.log("Hello World")}>Click Me</Button>
    </div>
  );
}

export default App;
