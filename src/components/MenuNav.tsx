const navLinks = [
  "burgers",
  "chickenSandwiches",
  "sides",
  "desserts",
  "drinks",
];

const MenuNav = () => {
  return (
    <nav className="hidden lg:block sticky top-0">
      <ul className="inline-flex flex-col font-medium mt-10 pt-10 gap-y-4">
        {navLinks.map((link) => (
          <a
            className="p-2 mx-4 cursor-pointer text-lg capitalize hover:underline"
            href={`#${link}`}
            key={link}
          >
            <li>{link.replace(/([a-z])([A-Z])/g, "$1 $2")}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default MenuNav;
