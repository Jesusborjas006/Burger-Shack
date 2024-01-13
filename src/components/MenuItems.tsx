type MenuItemsProp = {
  children: React.ReactNode;
};

const MenuItems = ({ children }: MenuItemsProp) => {
  return <main className="grid grid-cols-3 gap-x-6">{children}</main>;
};

export default MenuItems;
