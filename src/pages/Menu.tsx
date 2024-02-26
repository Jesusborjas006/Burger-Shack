import { CartItemsType } from "../types";
import MenuCategory from "../components/MenuCategory";
import MenuNav from "../components/MenuNav";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { MenuCategoryType } from "../data/menuData";

type MenuProps = {
  menuItems: MenuCategoryType;
  cartItems: CartItemsType[];
  handleCartItems: (newItem: CartItemsType) => void;
  isLoading: boolean;
  error: string;
};

const Menu = ({
  menuItems,
  cartItems,
  handleCartItems,
  isLoading,
  error,
}: MenuProps) => {
  return (
    <div>
      <Navbar>
        <Link to="cart">
          <p className="text-lg">Bag Items ({cartItems.length})</p>
        </Link>
      </Navbar>
      <main className="lg:flex">
        {isLoading && <Loading />}
        {!isLoading && !error && (
          <>
            <div className="lg:w-[18%]">
              <MenuNav />
            </div>
            <div className="lg:w-[82%] mx-auto px-6">
              <MenuCategory
                menuItems={menuItems}
                handleCartItems={handleCartItems}
              />
            </div>
          </>
        )}
        {error && (
          <p className="flex justify-center w-full h-svh items-center text-lg font-semibold">
            Failed to fetch menu items
          </p>
        )}
      </main>
    </div>
  );
};

export default Menu;
