import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

interface User {
  // dont need to type out all the user properties if we are not going to use them from the response
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchUsers();
    // get -> await promise -> res / err

    // .then((res) => setUsers(res.data))
    // .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
