import Logo from "./Logo";

type NavbarProps = {
  children: React.ReactNode;
};

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="flex justify-around items-center py-3 bg-orange-500 text-white">
      <Logo />
      {children}
    </nav>
  );
};

export default Navbar;
