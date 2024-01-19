import { CartItemsType } from "../types";

type TotalCostProps = {
  cartItems: CartItemsType[];
};

const TotalCost = ({ cartItems }: TotalCostProps) => {
  const getTotalCost = (arr: CartItemsType[]) => {
    const total = arr.reduce((acc, current) => {
      return (acc += current.price * current.quantity);
    }, 0);
    return Number(total).toFixed(2);
  };

  return (
    <div className="shadow-md min-w-[300px] border flex justify-around items-center h-[70px] font-bold md:text-lg w-[30%] rounded-2xl">
      <h4>Subtotal:</h4>
      <p>${getTotalCost(cartItems)}</p>
    </div>
  );
};

export default TotalCost;
