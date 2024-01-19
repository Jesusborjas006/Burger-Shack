import { CartItemsType, MenuCategoryType } from "../types";
import MenuCategory from "./MenuCategory";
import MenuNav from "./MenuNav";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

type MenuProps = {
  menuItems: MenuCategoryType;
  cartItems: CartItemsType[];
  handleCartItems: (newItem: CartItemsType) => void;
};

const Menu = ({ menuItems, cartItems, handleCartItems }: MenuProps) => {
  return (
    <div>
      <Navbar>
        <Link to="cart">
          <p className="text-lg">Cart Items ({cartItems.length})</p>
        </Link>
      </Navbar>
      <main className="lg:flex">
        <div className="lg:w-[18%]">
          <MenuNav />
        </div>
        <div className="lg:w-[82%] mx-auto px-6">
          <MenuCategory
            menuItems={menuItems}
            handleCartItems={handleCartItems}
          />
        </div>
      </main>
    </div>
  );
};

export default Menu;

// max-w-[1640px] mx-auto px-6
