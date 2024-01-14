import { MenuItemType } from "../types";
import MenuItem from "./MenuItem";
// import MenuSection from "./MenuSection";

type MenuItemsProp = {
  // children: React.ReactNode;
  menuItems: MenuItemType[];
};

const MenuItems = ({ menuItems }: MenuItemsProp) => {
  return (
    <main className="grid grid-cols-3 gap-8">
      {menuItems.map((item) => (
        <MenuItem key={item.id} menuItem={item} />
      ))}
    </main>
  );
};

export default MenuItems;
