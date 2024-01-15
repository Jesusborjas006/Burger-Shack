import { MenuCategoryType } from "../types";
import MenuItem from "./MenuItem";

type MenuCategoryProps = {
  menuItems: MenuCategoryType;
};

const MenuCategory = ({ menuItems }: MenuCategoryProps) => {
  // Category are keys of the object
  // Items are the menu items themselves (The value of the keys)

  return (
    <>
      {Object.entries(menuItems).map(([category, items]) => (
        <section key={category} className={category}>
          <h2 className="text-3xl font-bold my-4">{category.toUpperCase()}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 ">
            {items.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default MenuCategory;
