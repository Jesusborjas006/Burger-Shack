import { CartItemsType } from "../types";

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
  return (
    <footer className="bg-white flex flex-col items-center w-screen absolute bottom-0 left-0 pt-3 pb-5 gap-3">
      <p className="text-lg">
        <span className="font-bold">Total: </span>${price}
      </p>
      <button
        className="bg-orange-500 text-white font-bold text-lg rounded-full px-14 py-2"
        onClick={() =>
          handleCartItems({
            id: Date.now(),
            name,
            price,
            img,
          })
        }
      >
        Add To Bag
      </button>
    </footer>
  );
};

export default DetailsFooter;
