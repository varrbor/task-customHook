import "./styles.css";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function App() {
  const [users, setData] = useState([]);

  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <>
      {users &&
        users.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
    </>
  );
}
