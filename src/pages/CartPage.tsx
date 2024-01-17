import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const CartPage = () => {
  return (
    <section>
      <Navbar children={undefined} />
      <div className="w-full text-white bg-black font-semibold p-2 px-10 text-lg flex items-center">
        <Link to="/">
          <span className="mr-3">&lt;</span> Menu
        </Link>
      </div>
    </section>
  );
};

export default CartPage;
