import { useParams } from "react-router-dom";
import { MenuCategoryType } from "../types";

type ItemDetailsProp = {
  menuItems: MenuCategoryType;
};

const ItemDetails = ({ menuItems }: ItemDetailsProp) => {
  const { id } = useParams();

  const items = Object.entries(menuItems)
    .map(([, items]) => {
      return items;
    })
    .flatMap((item) => item);

  const item = items.find((item) => item.id === Number(id));

  return (
    <section className="border flex h-screen">
      <div className="w-[40%]">
        <img
          className="object-cover h-full"
          src={item?.image_url}
          alt={item?.name}
        />
      </div>
      <div className="w-[60%] p-10 mt-14 space-y-6">
        <h3 className="text-5xl font-bold">{item?.name}</h3>
        <p className="text-gray-600">
          ${item?.price} | {item?.calories} cals
        </p>
        <p className="text-gray-600">{item?.description}</p>

        {item?.ingredients ? (
          <div className="pt-10">
            <h4 className="text-2xl font-semibold mb-3">Ingredients</h4>
            <ul className="capitalize text-gray-600">
              {item?.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default ItemDetails;
