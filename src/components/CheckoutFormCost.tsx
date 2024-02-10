import { CartItemsType } from "../types";

type CheckoutFormCostProps = {
  cartItems: CartItemsType[];
  promoCodeInput: string;
};

const thePromoCode = "burger";

const CheckoutFormCost = ({
  cartItems,
  promoCodeInput,
}: CheckoutFormCostProps) => {
  const getSubTotalCost = (arr: CartItemsType[]) => {
    const total = arr.reduce((acc, current) => {
      return (acc += current.price * current.quantity);
    }, 0);
    return total.toFixed(2);
  };

  const subTotal = Number(getSubTotalCost(cartItems));
  const tax = subTotal * 0.06;
  const total = subTotal + tax;
  const discount = total * 0.2;
  const newDiscountedTotal = total - discount;

  return (
    <div className="flex-col space-y-1 my-8">
      <p className="flex justify-between">
        Subtotal: <span>${subTotal}</span>
      </p>
      <p className="flex justify-between">
        Taxes: <span>${tax.toFixed(2)}</span>
      </p>
      {}
      {promoCodeInput === thePromoCode && (
        <p className="flex justify-end">20% discount</p>
      )}

      <p className="flex justify-between font-bold">
        Total:
        <span>
          $
          {promoCodeInput === thePromoCode
            ? newDiscountedTotal.toFixed(2)
            : total.toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default CheckoutFormCost;
