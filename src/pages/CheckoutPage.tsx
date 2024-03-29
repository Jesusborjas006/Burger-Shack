import { useState } from "react";
import Navbar from "../components/Navbar";
import { CartItemsType } from "../types";
import OrderConfirmedModal from "../components/OrderConfirmedModal";
import PromoCodeInput from "../components/PromoCodeInput";
import CheckoutFormCost from "../components/CheckoutFormCost";
import ContactInfoInputs from "../components/ContactInfoInputs";
import SubmitOrderBtn from "../components/SubmitOrderBtn";
import { Link } from "react-router-dom";

type CheckoutPageProps = {
  cartItems: CartItemsType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemsType[] | []>>;
};

const CheckoutPage = ({ cartItems, setCartItems }: CheckoutPageProps) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });
  const [promoCodeInput, setPromoCodeInput] = useState("");
  const [modalIsActive, setModalIsActive] = useState(false);

  const handleFormChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (form.firstName && form.lastName) {
      setCartItems([]);
      setModalIsActive((prevState) => !prevState);
    }
  };

  return (
    <section>
      <Navbar children={undefined} />
      <div className="px-4 relative">
        <div className="border min-w-[340px] max-w-[450px] mx-auto px-6 pb-10 my-20 rounded-xl shadow-md">
          <Link
            to="/cart"
            className="text-3xl text-white bg-black hover:text-black hover:bg-white duration-300 absolute rounded-full w-[70px] h-[70px] flex justify-center items-center top-[-10px] left-8 cursor-pointer"
          >
            &larr;
          </Link>
          <form className="space-y-8">
            <h2 className="text-3xl font-bold mt-4">Contact Info</h2>
            <ContactInfoInputs handleFormChange={handleFormChange} />
            <PromoCodeInput setPromoCodeInput={setPromoCodeInput} />
            <CheckoutFormCost
              cartItems={cartItems}
              promoCodeInput={promoCodeInput}
            />
            <SubmitOrderBtn form={form} handleFormSubmit={handleFormSubmit} />
          </form>
        </div>
      </div>
      {modalIsActive && <OrderConfirmedModal />}
    </section>
  );
};

export default CheckoutPage;
