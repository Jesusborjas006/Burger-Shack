import { MenuItemType } from "../types";
import MenuItem from "./MenuItem";

type MenuItemsProp = {
  menuItems: MenuItemType[];
};

const MenuItems = ({ menuItems }: MenuItemsProp) => {
  return (
    <main>
      <div className="grid grid-cols-3 gap-x-6">
        {menuItems.map((item) => (
          <MenuItem key={item.id} menuItem={item} />
        ))}
      </div>
    </main>
  );
};

export default MenuItems;
