import { useEffect, useState } from "react";
import MenuItems from "./components/MenuItems";
import MenuItem from "./components/MenuItem";
import { MenuItemType } from "./types";

const url = "http://localhost:9000";

function App() {
  const [menuItems, setMenuItems] = useState<MenuItemType[] | []>([]);
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
      <MenuItems>
        {menuItems.map((item) => (
          <MenuItem key={item.id} menuItem={item} />
        ))}
      </MenuItems>
    </div>
  );
}

export default App;
