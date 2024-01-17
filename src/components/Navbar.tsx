import Logo from "./Logo";

type NavbarProps = {
  cartItems: [];
};

const Navbar = ({ cartItems }: NavbarProps) => {
  return (
    <nav className="flex justify-around items-center py-3 bg-orange-500 text-white">
      <Logo />
      <p className="text-lg">Cart Items ({cartItems.length})</p>
    </nav>
  );
};

export default Navbar;
