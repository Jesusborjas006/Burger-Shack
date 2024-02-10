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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  console.log("dshjadbjshcjhsdbc: ", error);

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
      try {
        setIsLoading(true);
        const response = await fetch(`${url}/menu`);

        if (!response.ok) {
          setIsLoading(false);
          setError("Something went wrong with fetching menu items");
          throw new Error("Something went wrong with fetching menu items");
        }
        const data = await response.json();
        setMenuItems(data);
        setIsLoading(false);
      } catch (err: any) {
        setError(err);
        setIsLoading(false);
      }
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
            isLoading={isLoading}
            error={error}
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
