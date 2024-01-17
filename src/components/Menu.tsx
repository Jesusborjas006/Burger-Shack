import { CartItemsType, MenuCategoryType } from "../types";
import MenuCategory from "./MenuCategory";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

type MenuProps = {
  menuItems: MenuCategoryType;
  cartItems: CartItemsType[];
  handleCartItems: (newItem: CartItemsType) => void;
};

const Menu = ({ menuItems, cartItems, handleCartItems }: MenuProps) => {
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
