import { MenuCategoryType } from "../types";
import MenuItem from "./MenuItem";
// const MenuCategory = ({ menuItems }: MenuCategoryProps) => {
//   return (
//     <>
//       <section className="">
//         <h2 className="text-3xl font-bold my-4">BURGERS</h2>
//         <MenuItems>
//           {menuItems.burgers.map((burger) => (
//             <div
//               key={burger.id}
//               className="border rounded-3xl shadow-lg hover:scale-105 duration-300"
//             >
//               <img
//                 className="w-full h-[240px] object-cover rounded-t-3xl"
//                 src={burger.image_url}
//                 alt={burger.name}
//               />
//               <div className="px-3 py-5">
//                 <h3 className=" text-2xl font-bold mb-1">{burger.name}</h3>
//                 <p className="text-gray-600 mb-2">
//                   {burger.description.length >= 105
//                     ? burger.description.slice(0, 100) + "..."
//                     : burger.description}
//                 </p>

//                 <p className="text-gray-600">
//                   ${burger.price} | {burger.calories} cals
//                 </p>

//                 <div className="flex justify-evenly mt-8">
//                   <button className="border-2 border-orange-500 text-orange-500 font-bold rounded-full px-4 py-2">
//                     Customize
//                   </button>
//                   <button className="bg-orange-500 text-white font-bold rounded-full px-4 py-2">
//                     Add To Bag
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </MenuItems>
//       </section>

//       <section className="">
//         <h2 className="text-3xl font-bold my-4">Chicken Sandwiches</h2>
//         <MenuItems>
//           {menuItems.chickenSandwiches.map((chickenSandwiche) => (
//             <MenuItem
//               key={chickenSandwiche.id}
//               chickenSandwiche={chickenSandwiche}
//             />
//           ))}
//         </MenuItems>
//       </section>
//     </>
//   );
// };

// export default MenuCategory;

type MenuCategoryProps = {
  menuItems: MenuCategoryType;
};

const MenuCategory = ({ menuItems }: MenuCategoryProps) => {
  return (
    <>
      {Object.entries(menuItems).map(([category, items]) => (
        <section key={category} className="">
          <h2 className="text-3xl font-bold my-4">{category.toUpperCase()}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 ">
            {items.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default MenuCategory;
