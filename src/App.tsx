import { useEffect, useState } from "react";
import MenuItems from "./components/MenuItems";

const url = "http://localhost:9000";

function App() {
  const [menuItems, setMenuItems] = useState([]);
  console.log(menuItems);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(`${url}/menu`);
      const data = await response.json();
      setMenuItems(data);
    };
    fetchMenu();
  }, []);

  return (
    <div className="max-w-[1640px] mx-auto p-6">
      <h1>Burger Shack</h1>
      <MenuItems menuItems={menuItems} />
    </div>
  );
}

export default App;
