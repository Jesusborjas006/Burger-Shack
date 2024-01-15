import { MenuItemType } from "../types";

type MenuItemProps = {
  item: MenuItemType;
};

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <div className="border rounded-3xl shadow-lg hover:scale-105 duration-300">
      <img
        className="w-full h-[240px] object-cover rounded-t-3xl"
        src={item.image_url}
        alt={item.name}
      />
      <div className="px-3 py-5">
        <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
        <p className="text-gray-600 mb-2">
          {item.description.length >= 105
            ? `${item.description.slice(0, 100)}...`
            : item.description}
        </p>
        <p className="text-gray-600">
          ${item.price} | {item.calories} cals
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
