import Logo from "./Logo";

type NavbarProps = {
  children: React.ReactNode;
};

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="flex justify-between items-center py-3 px-6 bg-orange-500 text-white sticky top-0 z-10">
      <Logo />
      {children}
    </nav>
  );
};

export default Navbar;
