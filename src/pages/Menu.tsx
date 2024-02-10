import { CartItemsType, MenuCategoryType } from "../types";
import MenuCategory from "../components/MenuCategory";
import MenuNav from "../components/MenuNav";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

type MenuProps = {
  menuItems: MenuCategoryType;
  cartItems: CartItemsType[];
  handleCartItems: (newItem: CartItemsType) => void;
  loading: boolean;
};

const Menu = ({
  menuItems,
  cartItems,
  handleCartItems,
  loading,
}: MenuProps) => {
  return (
    <div>
      <Navbar>
        <Link to="cart">
          <p className="text-lg">Bag Items ({cartItems.length})</p>
        </Link>
      </Navbar>
      <main className="lg:flex">
        {loading ? (
          <Loading />
        ) : (
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
      </main>
    </div>
  );
};

export default Menu;
