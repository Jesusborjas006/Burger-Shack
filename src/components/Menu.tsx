// import { MenuItemType } from "../types";
// import MenuSection from "./MenuSection";

import { MenuCategoryType } from "../types";
import MenuCategory from "./MenuCategory";

type MenuProps = {
  menuItems: MenuCategoryType;
};

const Menu = ({ menuItems }: MenuProps) => {
  return (
    <main className="">
      <MenuCategory menuItems={menuItems} />
    </main>
  );
};

export default Menu;
