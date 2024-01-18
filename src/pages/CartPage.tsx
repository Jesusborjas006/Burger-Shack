import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CartItemsType } from "../types";

type CartPageProps = {
  cartItems: CartItemsType[];
};

const CartPage = ({ cartItems }: CartPageProps) => {
  return (
    <section>
      <Navbar children={undefined} />
      <div className="w-full text-white bg-black font-semibold p-2 px-6 text-lg flex items-center">
        <Link to="/">
          <span className="mr-3">&lt;</span> Menu
        </Link>
      </div>
      <h2 className="my-10 px-6 font-bold text-2xl md:text-3xl lg:text-4xl">
        Your Bag
      </h2>
      <div className="max-w-[1640px] mx-auto px-6 pb-10 flex flex-col lg:flex-row">
        <div className="flex flex-col gap-7 justify-evenly shadow-md border lg:mr-10 lg:w-[70%] py-8 rounded-2xl">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-4 md:px-8 lg:px-12"
            >
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full object-cover mr-2 md:mr-5"
                />
                <p className="font-semibold md:text-lg ">{item.name}</p>
              </div>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col-reverse lg:flex-col mt-10 lg:mt-0 gap-10 ">
          <div className="shadow-md min-w-[300px] border flex justify-around items-center h-[70px] font-bold text-lg w-[30%] rounded-2xl">
            <h4>Subtotal:</h4>
            <p>$0.00</p>
          </div>
          <Link to="/">
            <button className="border border-orange-500 text-orange-500 font-bold rounded-full w-full p-4">
              Add more items
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartPage;