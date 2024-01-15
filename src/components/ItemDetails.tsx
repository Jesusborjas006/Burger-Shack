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

  return <>{item?.name}</>;
};

export default ItemDetails;
