import { useEffect, useState } from "react";

const url = "http://localhost:9000";

function App() {
  const [menu, setMenu] = useState([]);
  console.log(menu);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(`${url}/menu`);
      const data = await response.json();
      setMenu(data);
    };
    fetchMenu();
  }, []);

  return (
    <>
      <h1>Burger Shack</h1>
    </>
  );
}

export default App;
