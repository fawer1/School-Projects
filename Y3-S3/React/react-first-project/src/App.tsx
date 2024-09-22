import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color="secondary" onClick={() => console.log("Hello World")}>
        Click Me
      </Button>
      <Button onClick={() => console.log("Hello World")}>Click Me</Button>
    </div>
  );
}

export default App;
