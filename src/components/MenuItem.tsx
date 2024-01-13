import { MenuItemType } from "../types";

type MenuItemProps = {
  menuItem: MenuItemType;
};

const MenuItem = ({ menuItem }: MenuItemProps) => {
  return (
    <div className="border rounded-3xl">
      <img
        className=" rounded-t-3xl"
        src={menuItem.image_url}
        alt={menuItem.name}
      />
      <div className="px-3 py-5">
        <h3 className=" text-2xl font-bold mb-1">{menuItem.name}</h3>
        <p className="text-gray-600 mb-2">{menuItem.description}</p>

        <p className="text-gray-600">
          ${menuItem.price} | {menuItem.calories} cals
        </p>

        <div className="flex justify-evenly mt-8">
          <button className="border-2 border-orange-500 text-orange-500 font-bold rounded-full px-4 py-2">
            Customize
          </button>
          <button className="bg-orange-500 text-white font-bold rounded-full px-4 py-2">
            Add To Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
