import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const items = ["New York", "Los Angeles"];
  return (
    <div>
      <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={() => console.log("selected")}
      ></ListGroup>
    </div>
  );
}
export default App;
