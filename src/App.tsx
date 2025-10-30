import axios from "axios";
import { useState, useEffect } from "react";

interface User {
  // dont need to type out all the user properties if we are not going to use them from the response
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data[0].name));
  });

  return <div></div>;
}
export default App;
