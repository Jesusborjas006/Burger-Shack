// export type MenuItemType = {
//   id: number;
//   name: string;
//   description: string;
//   category: string;
//   price: number;
//   calories?: number;
//   ingredients?: string[];
//   image_url: string;
// };

// export type MenuCategoryType = {
//   burgers: MenuItemType[];
//   chickenSandwiches: MenuItemType[];
//   drinks: MenuItemType[];
//   sides: MenuItemType[];
//   desserts: MenuItemType[];
// };

export type CartItemsType = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
};
