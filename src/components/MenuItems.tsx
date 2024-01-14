// import { MenuItemType } from "../types";
// // import MenuSection from "./MenuSection";

// type MenuItemsProp = {
//   menuItems: {
//     burgers: MenuItemType[];
//     chickenSandwiches: MenuItemType[];
//   };
// };

// const MenuItems = ({ menuItems }: MenuItemsProp) => {
// //   console.log(menuItems);
// //   return (
// //     <main className="grid grid-cols-3 gap-8">
// //       {/* {menuItems.burgers.map((item) => (
// //         <MenuItem key={item.id} menuItem={item} />
// //       ))} */}
// //     </main>
// //   );
// // };

// // export default MenuItems;

// type MenuItemsProp = {
//   menuItems: MenuCategoryType;
// };

// const MenuItems = ({ menuItems }: MenuItemsProp) => {
//   console.log(menuItems);
//   return (
//     <div className="border border-green-600">
//       {menuItems.burgers.map((burger) => (
//         <div key={burger.id}>
//           <h3>{burger.name}</h3>
//         </div>
//       ))}

//       {menuItems.chickenSandwiches.map((chicken) => (
//         <div key={chicken.id}>
//           <h3>{chicken.name}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MenuItems;

const MenuItems = ({ children }) => {
  return <div className="grid grid-cols-3 gap-8">{children}</div>;
};

export default MenuItems;
