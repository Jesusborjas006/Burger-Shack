import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CartItemsType } from "../types";
import PageBackMenu from "../components/PageBackMenu";
import TotalCost from "../components/TotalCost";
import CartEmptyMessage from "../components/CartEmptyMessage";
import CartItems from "../components/CartItems";

type CartPageProps = {
  cartItems: CartItemsType[];
  removeCartItem: (itemId: number) => void;
};

const CartPage = ({ cartItems, removeCartItem }: CartPageProps) => {
  return (
    <section>
      <Navbar children={undefined} />
      <PageBackMenu />
      <h2 className="my-10 px-6 font-bold text-2xl md:text-3xl lg:text-4xl">
        Your Bag
      </h2>
      <div className="max-w-[1640px] mx-auto px-6 pb-10 flex flex-col lg:flex-row">
        <div className="flex flex-col gap-7 justify-evenly shadow-md border lg:mr-10 lg:w-[70%] py-8 rounded-2xl">
          {cartItems.length === 0 ? (
            <CartEmptyMessage />
          ) : (
            <CartItems cartItems={cartItems} removeCartItem={removeCartItem} />
          )}
        </div>
        <div className="flex flex-col lg:flex-col mt-10 lg:mt-0">
          <TotalCost cartItems={cartItems} />
          <Link to="/" className="mx-auto">
            <button className="border-2 border-orange-500 text-orange-500 font-bold rounded-full lg:w-full p-4 hover:text-white hover:bg-orange-500 duration-300 mt-10 mb-3 min-w-[300px] max-w-[400px]">
              Add more items
            </button>
          </Link>
          {cartItems.length > 0 && (
            <Link to="/checkout" className="mx-auto">
              <button className="text-white bg-black font-bold rounded-full p-4 min-w-[300px] max-w-[400px]">
                Proceed To Checkout
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartPage;
