type IngredientsProps = {
  ingredients: string[];
};

const Ingredients = ({ ingredients }: IngredientsProps) => {
  return (
    <>
      <h4 className="text-2xl font-semibold mb-3">Ingredients</h4>
      <ul className="capitalize text-gray-600">
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </>
  );
};

export default Ingredients;
