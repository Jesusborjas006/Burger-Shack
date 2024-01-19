import { CartItemsType } from "../types";

type CartItemsProps = {
  cartItems: CartItemsType[];
  removeCartItem: (itemId: number) => void;
};

const CartItems = ({ cartItems, removeCartItem }: CartItemsProps) => {
  return (
    <>
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
            <p className="font-semibold text-sm md:text-lg ">{item.name}</p>
          </div>
          <div className="flex items-center gap-x-3 md:gap-x-8">
            <p className="font-semibold text-sm sm:text-base">
              Qt: {item.quantity}
            </p>
            <p className="font-bold text-sm sm:text-base">
              ${Number(item.price * item.quantity).toFixed(2)}
            </p>
            <button
              className="bg-red-500 text-white w-[25px] sm:w-[30px] sm:py-1 rounded-full font-bold hover:bg-red-800"
              onClick={() => removeCartItem(item.id)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItems;
