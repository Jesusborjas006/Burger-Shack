// import { MenuItemType } from "../types";
// import MenuSection from "./MenuSection";

import { MenuCategoryType } from "../types";
import MenuCategory from "./MenuCategory";
import Navbar from "./Navbar";

type MenuProps = {
  menuItems: MenuCategoryType;
};

const Menu = ({ menuItems }: MenuProps) => {
  return (
    <>
      <Navbar />
      <main className="max-w-[1640px] mx-auto px-8">
        <MenuCategory menuItems={menuItems} />
      </main>
    </>
  );
};

export default Menu;
