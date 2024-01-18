import { useEffect, useState } from "react";
import { CartItemsType, MenuCategoryType } from "./types";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import DetailsPage from "./pages/DetailsPage";
import CartPage from "./pages/CartPage";

const url = "http://localhost:9000";

function App() {
  const [menuItems, setMenuItems] = useState<
    MenuCategoryType | { burgers: []; chickenSandwiches: []; drinks: [] }
  >({
    burgers: [],
    chickenSandwiches: [],
    drinks: [],
  });
  const [cartItems, setCartItems] = useState<CartItemsType[] | []>([]);
  console.log(cartItems);

  const handleCartItems = (newItem: CartItemsType) => {
    setCartItems([...cartItems, newItem]);
  };

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(`${url}/menu`);
      const data = await response.json();
      setMenuItems(data);
    };
    fetchMenu();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Menu
            menuItems={menuItems}
            cartItems={cartItems}
            handleCartItems={handleCartItems}
          />
        }
      />
      <Route
        path="/details/:id"
        element={<DetailsPage menuItems={menuItems} />}
      />
      <Route path="cart" element={<CartPage cartItems={cartItems} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
