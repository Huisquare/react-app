import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const buttonFunc = () => {
    console.log("clicked");
  };
  return (
    <div>
      <Alert>
        <h1>Hello</h1>
      </Alert>

      <Button onClick={buttonFunc} color="secondary">
        text here
      </Button>
    </div>
  );
}
export default App;
