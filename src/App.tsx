import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      {clicked && (
        <Alert onClose={() => setClicked(false)}>
          <h1>Button has been clicked!</h1>
        </Alert>
      )}

      {!clicked && (
        <Button onClick={() => setClicked(!clicked)} color="primary">
          click here!
        </Button>
      )}
    </div>
  );
}
export default App;
