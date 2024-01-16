import { useEffect, useState } from "react";
import { MenuCategoryType } from "./types";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import DetailsPage from "./pages/DetailsPage";

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
    <div>
      <Routes>
        <Route path="/" element={<Menu menuItems={menuItems} />} />
        <Route
          path="/details/:id"
          element={<DetailsPage menuItems={menuItems} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
