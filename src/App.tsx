import { useEffect, useState } from "react";
import { MenuCategoryType } from "./types";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ItemDetails from "./components/ItemDetails";

const url = "http://localhost:9000";

function App() {
  const [menuItems, setMenuItems] = useState<
    MenuCategoryType | { burgers: []; chickenSandwiches: []; drinks: [] }
  >({
    burgers: [],
    chickenSandwiches: [],
    drinks: [],
  });

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
      <Routes>
        <Route path="/" element={<Menu menuItems={menuItems} />} />
        <Route
          path="/details/:id"
          element={<ItemDetails menuItems={menuItems} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
