import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Seoul"];

  return (
    <div>
      <ListGroup heading="Cities" items={items} />
    </div>
  );
}
export default App;
