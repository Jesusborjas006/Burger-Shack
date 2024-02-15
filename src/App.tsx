import { useEffect, useState } from "react";
import { CartItemsType, MenuCategoryType } from "./types";
import Menu from "./pages/Menu";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import DetailsPage from "./pages/DetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
// import supabase from "./services/supabase";
import menuData from "./data/menu.json";

function App() {
  const [menuItems, setMenuItems] = useState<
    | MenuCategoryType
    | {
        sides: [];
        desserts: [];
        burgers: [];
        chickenSandwiches: [];
        drinks: [];
      }
  >({
    sides: [],
    desserts: [],
    burgers: [],
    chickenSandwiches: [],
    drinks: [],
  });
  const [cartItems, setCartItems] = useState<CartItemsType[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState("");

  const handleCartItems = (newItem: CartItemsType) => {
    setCartItems([...cartItems, newItem]);
  };

  const removeCartItem = (itemId: number) => {
    const filtered = cartItems.filter((items) => {
      return items.id !== itemId;
    });
    setCartItems(filtered);
  };

  // SUPABASE DATABASE
  // useEffect(() => {
  //   const getMenu = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data, error } = await supabase.from("menu").select("*");

  //       if (error) {
  //         throw new Error("Menu could not be loaded");
  //       }

  //       setMenuItems(data[0].menu);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //     }
  //   };
  //   getMenu();
  // }, []);

  useEffect(() => {
    const getMenu = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:9000/menu");

        if (!response.ok) {
          throw new Error("Menu could not be loaded");
        }

        let data = await response.json();
        data = menuData.menu;

        setTimeout(() => {
          setIsLoading(false);
        }, 1000);

        console.log(data);
        setMenuItems(data);
      } catch (error: unknown) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getMenu();
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
