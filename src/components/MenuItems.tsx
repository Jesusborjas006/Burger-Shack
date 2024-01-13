import { MenuItemType } from "../types";
import MenuItem from "./MenuItem";

type MenuItemsProp = {
  menuItems: MenuItemType[];
};

const MenuItems = ({ menuItems }: MenuItemsProp) => {
  return (
    <main>
      <h1>Menu</h1>
      {menuItems.map((item) => (
        <MenuItem key={item.id} menuItem={item} />
      ))}
    </main>
  );
};

export default MenuItems;
