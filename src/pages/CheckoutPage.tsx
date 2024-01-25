import { useState } from "react";
import Navbar from "../components/Navbar";
import { CartItemsType } from "../types";

type CheckoutPageProps = {
  cartItems: CartItemsType[];
};

const CheckoutPage = ({ cartItems }: CheckoutPageProps) => {
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
  console.log(form);

  const handleFormChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (form.email && form.firstName && form.lastName && form.phoneNumber) {
      console.log("Accepted");
    } else {
      console.log("Failed");
    }
  };

  const subTotal = Number(getSubTotalCost(cartItems));
  const tax = subTotal * 0.06;
  const total = subTotal + tax;

  return (
    <section className=" border">
      <Navbar children={undefined} />
      <div className="border min-w-[340px] max-w-[450px] mx-auto px-6 pb-10 my-14 rounded-xl shadow-md">
        <form className="space-y-12">
          <h2 className="text-3xl font-bold mt-8">Contact Info</h2>
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
          <div className="flex justify-between">
            <div>
              <label>First Name</label>
              <br />
              <input
                className="border-b outline-none"
                type="text"
                name="firstName"
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label>Last Name</label>
              <br />
              <input
                className="border-b outline-none"
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
            />
          </div>
          <div className="flex-col space-y-1 my-8">
            <p className="flex justify-between">
              Subtotal: <span>${subTotal}</span>
            </p>
            <p className="flex justify-between">
              Taxes: <span>${tax.toFixed(2)}</span>
            </p>
            <p className="flex justify-between font-bold">
              Total: <span>${total.toFixed(2)}</span>
            </p>
          </div>
          <button
            className={`text-white w-full rounded-full py-3 font-semibold ${
              !form.email &&
              !form.firstName &&
              !form.lastName &&
              !form.phoneNumber
                ? "cursor-not-allowed bg-orange-200"
                : "bg-orange-500"
            } `}
            onClick={handleFormSubmit}
            disabled={
              !form.email &&
              !form.firstName &&
              !form.lastName &&
              !form.phoneNumber
            }
          >
            Submit Order
          </button>
        </form>
      </div>
    </section>
  );
};

export default CheckoutPage;
