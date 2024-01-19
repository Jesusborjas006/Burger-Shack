import { CartItemsType, MenuCategoryType } from "../types";
import MenuItem from "./MenuItem";

type MenuCategoryProps = {
  menuItems: MenuCategoryType;
  handleCartItems: (newItem: CartItemsType) => void;
};

const MenuCategory = ({ menuItems, handleCartItems }: MenuCategoryProps) => {
  // Category are keys of the object
  // Items are the menu items themselves (The value of the keys)
  // [key, value]

  return (
    <>
      {Object.entries(menuItems).map(([category, items]) => (
        <section key={category} className="my-12" id={category}>
          <h2 className="text-3xl font-bold my-4">
            {category.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 ">
            {items.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                handleCartItems={handleCartItems}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default MenuCategory;
