import { Link } from "react-router-dom";

const OrderConfirmedModal = () => {
  return (
    <section className="border w-screen h-full absolute top-0 bg-black/60 z-10">
      <div className="border absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white p-10 rounded-xl">
        <h3 className="text-xl md:text-2xl font-bold mb-5">Order Confirmed</h3>
        <Link to="/">
          <button className="bg-orange-500 text-white font-medium w-full rounded-full py-2">
            Return to Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default OrderConfirmedModal;
