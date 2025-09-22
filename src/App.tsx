import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Chilli"] });
  };

  return (
    <div>
      {pizza.toppings.map((p) => (
        <p key="p">{p}</p>
      ))}
      {/* <p>{pizza.toppings}</p> */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default App;
