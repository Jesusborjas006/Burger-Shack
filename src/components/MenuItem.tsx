import { MenuItemType } from "../types";

type MenuItemProps = {
  menuItem: MenuItemType;
};

const MenuItem = ({ menuItem }: MenuItemProps) => {
  return (
    <div className="border">
      <h3>{menuItem.name}</h3>
      <p>{menuItem.description}</p>

      <p>
        ${menuItem.price} | {menuItem.calories} cals
      </p>
    </div>
  );
};

export default MenuItem;
