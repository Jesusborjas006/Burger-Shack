import { useState } from "react";
import Navbar from "../components/Navbar";
import { CartItemsType } from "../types";
import OrderConfirmedModal from "../components/OrderConfirmedModal";

type CheckoutPageProps = {
  cartItems: CartItemsType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemsType[] | []>>;
};

const thePromoCode = "burger";

const CheckoutPage = ({ cartItems, setCartItems }: CheckoutPageProps) => {
  const getSubTotalCost = (arr: CartItemsType[]) => {
    const total = arr.reduce((acc, current) => {
      return (acc += current.price * current.quantity);
    }, 0);
    return total.toFixed(2);
  };
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [promoCodeInput, setPromoCodeInput] = useState("");
  const [modalIsActive, setModalIsActive] = useState(false);

  const handleFormChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (form.email && form.firstName && form.lastName && form.phoneNumber) {
      setCartItems([]);
      setModalIsActive((prevState) => !prevState);
    }
  };

  const subTotal = Number(getSubTotalCost(cartItems));
  const tax = subTotal * 0.06;
  const total = subTotal + tax;
  const discount = total * 0.2;
  const newDiscountedTotal = total - discount;

  return (
    <section>
      <Navbar children={undefined} />
      <div className="px-4">
        <div className="border min-w-[340px] max-w-[450px] mx-auto px-6 pb-10 my-14 rounded-xl shadow-md">
          <form className="space-y-8">
            <h2 className="text-3xl font-bold mt-4">Contact Info</h2>
            <div>
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                className="border-b w-full outline-none"
                type="email"
                id="email"
                name="email"
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0">
              <div>
                <label>First Name</label>
                <br />
                <input
                  className="border-b outline-none w-full"
                  type="text"
                  name="firstName"
                  onChange={handleFormChange}
                />
              </div>
              <div>
                <label>Last Name</label>
                <br />
                <input
                  className="border-b outline-none w-full"
                  type="text"
                  name="lastName"
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div>
              <label>Phone Number</label>
              <br />
              <input
                className="border-b w-full outline-none"
                type="tel"
                name="phoneNumber"
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label>Have a promo code?</label>
              <input
                className="border-b w-full outline-none py-2"
                type="text"
                placeholder="Promo code"
                onChange={(e) => setPromoCodeInput(e.target.value)}
              />
            </div>
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
            <button
              className={`text-white w-full rounded-full py-3 font-semibold ${
                !form.email ||
                !form.firstName ||
                !form.lastName ||
                !form.phoneNumber
                  ? "cursor-not-allowed bg-orange-200"
                  : "bg-orange-500"
              } `}
              onClick={handleFormSubmit}
              disabled={
                !form.email ||
                !form.firstName ||
                !form.lastName ||
                !form.phoneNumber
              }
            >
              Submit Order
            </button>
          </form>
        </div>
      </div>
      {modalIsActive && <OrderConfirmedModal />}
    </section>
  );
};

export default CheckoutPage;
