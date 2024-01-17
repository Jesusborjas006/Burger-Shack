import { MenuCategoryType } from "../types";
import MenuCategory from "./MenuCategory";
import Navbar from "./Navbar";
import { useState } from "react";

type MenuProps = {
  menuItems: MenuCategoryType;
};

const Menu = ({ menuItems }: MenuProps) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const handleCartItems = (newItem) => {
    setCartItems([...cartItems, newItem]);
  };

  return (
    <>
      <Navbar cartItems={cartItems} />
      <main className="max-w-[1640px] mx-auto px-8">
        <MenuCategory menuItems={menuItems} handleCartItems={handleCartItems} />
      </main>
    </>
  );
};

export default Menu;
