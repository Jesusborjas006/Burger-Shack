// import { MenuItemType } from "../types";
// import MenuSection from "./MenuSection";

import { MenuCategoryType } from "../types";
import MenuCategory from "./MenuCategory";

type MenuProps = {
  menuItems: MenuCategoryType;
};

const Menu = ({ menuItems }: MenuProps) => {
  return (
    <main className="max-w-[1640px] mx-auto p-6">
      <MenuCategory menuItems={menuItems} />
    </main>
  );
};

export default Menu;
