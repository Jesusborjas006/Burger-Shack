import Navbar from "../components/Navbar";

const CheckoutPage = () => {
  return (
    <section className="h-screen border">
      <Navbar children={undefined} />
      <div className="border min-w-[340px] max-w-[450px] mx-auto px-6 pb-10">
        <form className="space-y-12" id="contact-form">
          <h2 className="text-3xl font-bold mt-10">Contact Info</h2>
          <div>
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              className="border-b w-full outline-none"
              type="email"
              id="email"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <label>First Name</label>
              <br />
              <input className="border-b outline-none" type="text" />
            </div>
            <div>
              <label>Last Name</label>
              <br />
              <input className="border-b outline-none" type="text" />
            </div>
          </div>
          <div>
            <label>Phone Number</label>
            <br />
            <input className="border-b w-full outline-none" type="tel" />
          </div>
          <div>
            <label>Have a promo code?</label>
            <input
              className="border-b w-full outline-none py-2"
              type="text"
              placeholder="Promo code"
            />
          </div>
        </form>
        <div className="flex-col space-y-1 my-8">
          <p className="flex justify-between">
            Subtotal: <span>$0.00</span>
          </p>
          <p className="flex justify-between">
            Taxes: <span>$0.00</span>
          </p>
          <p className="flex justify-between font-bold">
            Total: <span>$0.00</span>
          </p>
        </div>
        <button
          form="contact-form"
          className="bg-orange-500 text-white w-full rounded-full py-3 font-semibold"
        >
          Submit Order
        </button>
      </div>
    </section>
  );
};

export default CheckoutPage;
