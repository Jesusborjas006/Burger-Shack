type DetailsOverviewProps = {
  name: string;
  description: string;
  price: number;
  calories: number;
};

const DetailsOverview = ({
  name,
  description,
  price,
  calories,
}: DetailsOverviewProps) => {
  return (
    <>
      <h3 className="text-5xl font-bold">{name}</h3>
      <p className="text-gray-600">
        ${price} | {calories} cals
      </p>
      <p className="text-gray-600">{description}</p>
    </>
  );
};

export default DetailsOverview;
