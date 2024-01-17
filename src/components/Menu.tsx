import { MenuCategoryType } from "../types";
import MenuCategory from "./MenuCategory";
import Navbar from "./Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      <Navbar>
        <Link to="cart">
          <p className="text-lg">Cart Items ({cartItems.length})</p>
        </Link>
      </Navbar>
      <main className="max-w-[1640px] mx-auto px-8">
        <MenuCategory menuItems={menuItems} handleCartItems={handleCartItems} />
      </main>
    </>
  );
};

export default Menu;
