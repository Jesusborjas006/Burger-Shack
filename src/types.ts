export type MenuItemType = {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  calories: number;
  ingredients: string[];
  image_url: string;
};

export type MenuCategoryType = {
  burgers: MenuItemType[];
  chickenSandwiches: MenuItemType[];
  drinks: MenuItemType[];
  // Add more categories as needed
};
