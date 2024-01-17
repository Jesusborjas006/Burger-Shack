import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [cartItems, setCartItems] = useState();

  return (
    <nav className="flex justify-around items-center py-3 bg-orange-500 text-white">
      <Logo />
      <p className="text-lg">Cart Items (0)</p>
    </nav>
  );
};

export default Navbar;
