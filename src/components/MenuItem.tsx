import { Link } from "react-router-dom";
import { CartItemsType, MenuItemType } from "../types";
import { useState } from "react";

type MenuItemProps = {
  item: MenuItemType;
  handleCartItems: (newItem: CartItemsType) => void;
};

const MenuItem = ({ item, handleCartItems }: MenuItemProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border rounded-3xl shadow-lg hover:scale-105 duration-300 max-w-[480px] relative pb-20">
      <Link to={`/details/${item.id}`}>
        <img
          className="w-full h-[260px] object-cover rounded-t-3xl"
          src={item.image_url}
          alt={item.name}
        />
      </Link>
      <div className="px-3 py-5">
        <Link to={`/details/${item.id}`}>
          <h3 className="text-[23px] font-bold mb-1">{item.name}</h3>
        </Link>
        <p className="text-gray-600 mb-2 whitespace-nowrap overflow-hidden text-ellipsis will-change-auto">
          {item.description}
        </p>
        <p className="text-gray-600">
          ${item.price} | {item.calories} cals
        </p>
        <div className="absolute bottom-5 left-0 w-full">
          <div className="flex justify-evenly">
            <Link to={`/details/${item.id}`}>
              <button className="border-2 border-orange-500 text-orange-500 font-bold rounded-full px-4 py-2">
                Details
              </button>
            </Link>
            <select
              className="border rounded-full pl-4 w-[18%]"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
            <button
              className="bg-orange-500 text-white font-bold rounded-full w-[40%]"
              onClick={() =>
                handleCartItems({
                  id: Date.now(),
                  name: item.name,
                  price: item.price,
                  img: item.image_url,
                  quantity: quantity,
                })
              }
            >
              Add To Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
