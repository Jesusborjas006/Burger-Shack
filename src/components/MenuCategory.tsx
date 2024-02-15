import { CartItemsType, MenuCategoryType } from "../types";
import MenuItem from "./MenuItem";

type MenuCategoryProps = {
  menuItems: MenuCategoryType;
  handleCartItems: (newItem: CartItemsType) => void;
};

const orderedKeys = [
  "burgers",
  "chickenSandwiches",
  "sides",
  "drinks",
  "desserts",
];

const MenuCategory = ({ menuItems, handleCartItems }: MenuCategoryProps) => {
  const sortedData = {};
  orderedKeys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(menuItems, key)) {
      sortedData[key] = menuItems[key];
    }
  });
  // Category are keys of the object
  // Items are the menu items themselves (The value of the keys)
  // [key, value]

  return (
    <>
      {Object.entries(sortedData).map(([category, items]) => (
        <section key={category} className="py-8" id={category}>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold pb-5 pt-8">
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
