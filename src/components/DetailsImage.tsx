type DetailsImageProp = {
  img: string;
  name: string;
};

const DetailsImage = ({ img, name }: DetailsImageProp) => {
  return <img className="object-cover h-full" src={img} alt={name} />;
};

export default DetailsImage;
