export type MenuItemType = {
  id: number;
  name: string;
  description: string;
  price: number;
  calories?: number;
  ingredients?: string[];
  size?: string;
  image_url: string;
};

export type MenuCategoryType = {
  burgers: MenuItemType[];
  chickenSandwiches: MenuItemType[];
  drinks: MenuItemType[];
  sides: MenuItemType[];
  desserts: MenuItemType[];
};

export type MenuDataType = {
  menu: MenuCategoryType;
};

const menuData: MenuDataType = {
  menu: {
    burgers: [
      {
        id: 1,
        name: "Classic Beef Burger",
        description:
          "Savor the rich flavors of our classic beef burger featuring a perfectly seasoned juicy beef patty layered with crisp lettuce, ripe tomato slices, tangy pickles, and drizzled with our special house sauce, all sandwiched between a lightly toasted sesame seed bun.",
        price: 7.99,
        calories: 600,
        ingredients: [
          "beef patty",
          "lettuce",
          "tomato",
          "pickles",
          "special sauce",
          "sesame seed bun",
        ],
        image_url:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        name: "Chicken Avocado Burger",
        description:
          "Experience a burst of flavors with our chicken avocado burger. Grilled chicken breast meets the creamy goodness of fresh avocado, crispy bacon, and crisp lettuce, all complemented by a zesty aioli, served on a wholesome whole grain bun.",
        price: 8.99,
        calories: 550,
        ingredients: [
          "grilled chicken breast",
          "avocado",
          "bacon",
          "lettuce",
          "aioli",
          "whole grain bun",
        ],
        image_url:
          "https://images.pexels.com/photos/7963144/pexels-photo-7963144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 11,
        name: "BBQ Bacon Cheeseburger",
        description:
          "Indulge in the bold flavors of our BBQ Bacon Cheeseburger. A juicy beef patty topped with crispy bacon, cheddar cheese, lettuce, tomato, and smothered in tangy BBQ sauce. Served on a toasted brioche bun.",
        price: 9.49,
        calories: 650,
        ingredients: [
          "beef patty",
          "bacon",
          "cheddar cheese",
          "lettuce",
          "tomato",
          "BBQ sauce",
          "brioche bun",
        ],
        image_url:
          "https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 12,
        name: "Spicy Jalapeño Burger",
        description:
          "Kick up the heat with our Spicy Jalapeño Burger. A flame-grilled beef patty topped with melted pepper jack cheese, fresh jalapeños, lettuce, and spicy mayo. Served on a sesame seed bun.",
        price: 8.99,
        calories: 600,
        ingredients: [
          "beef patty",
          "pepper jack cheese",
          "jalapeños",
          "lettuce",
          "spicy mayo",
          "sesame seed bun",
        ],
        image_url:
          "https://images.pexels.com/photos/6488939/pexels-photo-6488939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    chickenSandwiches: [
      {
        id: 3,
        name: "Grilled Chicken Sandwich",
        description:
          "Simple and delicious grilled chicken sandwich with lettuce, tomato, and mayo on a soft whole wheat bun.",
        price: 9.99,
        calories: 500,
        ingredients: [
          "grilled chicken breast",
          "lettuce",
          "tomato",
          "mayo",
          "whole wheat bun",
        ],
        image_url:
          "https://images.unsplash.com/photo-1703219342329-fce8488cf443?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        name: "Spicy Buffalo Chicken Sandwich",
        description:
          "Spicy buffalo chicken sandwich with lettuce, tomato, and ranch dressing, served in a sesame seed bun.",
        price: 10.99,
        calories: 550,
        ingredients: [
          "spicy buffalo chicken",
          "lettuce",
          "tomato",
          "ranch dressing",
          "sesame seed bun",
        ],
        image_url:
          "https://images.pexels.com/photos/9207056/pexels-photo-9207056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 5,
        name: "BBQ Chicken Bacon Ranch Sandwich",
        description:
          "Satisfy your cravings with our BBQ Chicken Bacon Ranch Sandwich. Grilled chicken, bacon, cheddar cheese, lettuce, tomato, BBQ sauce, and ranch dressing on a toasted ciabatta roll.",
        price: 11.99,
        calories: 600,
        ingredients: [
          "grilled chicken",
          "bacon",
          "cheddar cheese",
          "lettuce",
          "tomato",
          "BBQ sauce",
          "ranch dressing",
          "toasted ciabatta roll",
        ],
        image_url:
          "https://images.pexels.com/photos/15076700/pexels-photo-15076700/free-photo-of-burger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    sides: [
      {
        id: 8,
        name: "Crispy Potato Wedges",
        description:
          "Irresistibly crispy potato wedges seasoned to perfection. Served with your choice of dipping sauce.",
        price: 3.49,
        calories: 300,
        image_url:
          "https://images.unsplash.com/photo-1623238913973-21e45cced554?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 9,
        name: "Garlic Parmesan Fries",
        description:
          "Golden fries tossed in garlic and Parmesan seasoning. A flavorful twist on a classic side.",
        price: 3.99,
        calories: 350,
        image_url:
          "https://images.pexels.com/photos/6006652/pexels-photo-6006652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 10,
        name: "Onion Rings",
        description:
          "Crunchy and delicious onion rings, battered and fried to perfection. Served with your favorite dipping sauce.",
        price: 4.49,
        calories: 280,
        image_url:
          "https://images.pexels.com/photos/18976848/pexels-photo-18976848/free-photo-of-close-up-of-onion-rings-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    desserts: [
      {
        id: 13,
        name: "Chocolate Fudge Brownie",
        description:
          "Indulge your sweet tooth with our rich and gooey chocolate fudge brownie. Topped with a scoop of vanilla ice cream and drizzled with chocolate syrup.",
        ingredients: [
          "brownie mix",
          "chocolate chips",
          "cocoa powder",
          "vanilla ice cream",
          "chocolate syrup",
        ],
        price: 4.99,
        calories: 400,
        image_url:
          "https://images.pexels.com/photos/13999756/pexels-photo-13999756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 14,
        name: "Strawberry Cheesecake",
        description:
          "Experience the delightful combination of creamy cheesecake and fresh strawberries. A perfect way to end your meal on a sweet note.",
        ingredients: [
          "cream cheese",
          "sugar",
          "eggs",
          "vanilla extract",
          "strawberries",
          "graham cracker crust",
        ],
        price: 5.49,
        calories: 450,
        image_url:
          "https://images.pexels.com/photos/14631305/pexels-photo-14631305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    drinks: [
      {
        id: 6,
        name: "Refreshing Lemonade",
        description:
          "Cool off with our refreshing lemonade, made with freshly squeezed lemons and a hint of sweetness.",
        price: 2.49,
        size: "Regular",
        image_url:
          "https://www.webstaurantstore.com/images/products/large/605980/2206637.jpg",
      },
      {
        id: 7,
        name: "Iced Coffee",
        description:
          "Start your day with a kick! Our iced coffee is brewed to perfection and served over ice.",
        price: 3.99,
        size: "Large",
        image_url:
          "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=3114&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
};

export default menuData;
