import { useEffect, useState } from "react";
import { MenuCategoryType } from "./types";
import Menu from "./components/Menu";

const url = "http://localhost:9000";

function App() {
  const [menuItems, setMenuItems] = useState<
    MenuCategoryType | { burgers: []; chickenSandwiches: []; drinks: [] }
  >({
    burgers: [],
    chickenSandwiches: [],
    drinks: [],
  });
  // console.log(menuItems);

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
      <Menu menuItems={menuItems} />
    </div>
  );
}

export default App;

// {menuItems.map((item) => (
//   <MenuItem key={item.id} menuItem={item} />
// ))}
