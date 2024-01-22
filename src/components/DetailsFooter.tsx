import { useNavigate } from "react-router-dom";
import { CartItemsType } from "../types";
import { useState } from "react";

type DetailsFooterProps = {
  name: string;
  price: number;
  img: string;
  handleCartItems: (newItem: CartItemsType) => void;
};

const DetailsFooter = ({
  name,
  price,
  img,
  handleCartItems,
}: DetailsFooterProps) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  return (
    <footer className="bg-white flex flex-col items-center w-screen absolute bottom-0 left-0 pt-3 pb-5 gap-3">
      <p className="text-lg">
        <span className="font-bold">Total: </span>${price * quantity}
      </p>
      <select
        className="border rounded-full px-4 py-2 cursor-pointer"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <button
        className="bg-orange-500 text-white border-2 border-orange-500 font-bold text-lg rounded-full px-14 py-2 hover:text-orange-500 hover:border-orange-500 hover:bg-white duration-300"
        onClick={() => {
          handleCartItems({
            id: Date.now(),
            name,
            price,
            img,
            quantity,
          }),
            navigate(-1);
        }}
      >
        Add To Bag
      </button>
    </footer>
  );
};

export default DetailsFooter;
