import { MenuItemType } from "../types";

type MenuSectionProps = {
  menuItems: MenuItemType[];
};

const MenuSection = ({ menuItems }: MenuSectionProps) => {
  return (
    <section>
      <h2 className=" text-3xl font-bold my-4">BURGERS</h2>
    </section>
  );
};

export default MenuSection;
