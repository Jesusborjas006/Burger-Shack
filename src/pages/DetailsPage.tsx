import { useParams } from "react-router-dom";
import { MenuCategoryType } from "../types";
import Loading from "../components/Loading";
import DetailsImage from "../components/DetailsImage";
import Ingredients from "../components/Ingredients";
import DetailsOverview from "../components/DetailsOverview";

type ItemDetailsProp = {
  menuItems: MenuCategoryType;
};

const DetailsPage = ({ menuItems }: ItemDetailsProp) => {
  const { id } = useParams();

  const items = Object.entries(menuItems)
    .map(([, items]) => {
      return items;
    })
    .flatMap((item) => item);

  const item = items.find((item) => item.id === Number(id));

  if (item) {
    return (
      <section className="border flex h-screen">
        <div className="w-[40%]">
          <DetailsImage img={item.image_url} name={item.name} />
        </div>
        <div className="w-[60%] p-10 mt-14 space-y-6">
          <DetailsOverview
            name={item.name}
            description={item.description}
            price={item.price}
            calories={item.calories}
          />

          <div className="pt-10">
            {item.ingredients && <Ingredients ingredients={item.ingredients} />}
          </div>
        </div>
      </section>
    );
  } else {
    return <Loading />;
  }
};

export default DetailsPage;
