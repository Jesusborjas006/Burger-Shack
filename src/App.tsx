import { useEffect, useState } from "react";
import { CartItemsType, MenuCategoryType } from "./types";
import Menu from "./pages/Menu";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import DetailsPage from "./pages/DetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

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
  const [loading, setLoading] = useState(true);

  const handleCartItems = (newItem: CartItemsType) => {
    setCartItems([...cartItems, newItem]);
  };

  const removeCartItem = (itemId: number) => {
    const filtered = cartItems.filter((items) => {
      return items.id !== itemId;
    });
    setCartItems(filtered);
  };

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(`${url}/menu`);
      const data = await response.json();
      setMenuItems(data);
      setLoading(false);
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
            loading={loading}
          />
        }
      />
      <Route
        path="/details/:id"
        element={
          <DetailsPage
            menuItems={menuItems}
            handleCartItems={handleCartItems}
          />
        }
      />
      <Route
        path="cart"
        element={
          <CartPage cartItems={cartItems} removeCartItem={removeCartItem} />
        }
      />
      <Route
        path="checkout"
        element={
          <CheckoutPage cartItems={cartItems} setCartItems={setCartItems} />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
