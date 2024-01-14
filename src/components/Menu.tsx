import { MenuItemType } from "../types";
import MenuSection from "./MenuSection";

type MenuProps = {
  menuItems: MenuItemType[];
};

const Menu = ({ menuItems }: MenuProps) => {
  return (
    <main>
      <MenuSection menuItems={menuItems} />
    </main>
  );
};

export default Menu;
