const menuItems = {
  Pizza: {
    title: "Pizza",
    desc: "From the classic simplicity of a traditional Margherita to the rich indulgence of gourmet truffle oil creations, we artfully blend the best of old-world charm with modern culinary innovation. Each pizza is hand-tossed with care, topped with fresh, high-quality ingredients, and baked to golden perfection.",
    items: [
      {
        name: "Cheese Avalanche",
        allergens: ["Dairy", "Gluten"],
        nutrition: { Calories: 340, Fat: "18g", Carbs: "29g", Protein: "16g" },
        ingredients:
          "Mozzarella, cheddar, Parmesan, gouda, ricotta, marinara sauce, oregano",
        price: "$14.99",
      },
      {
        name: "Buffalo Bliss",
        allergens: ["Dairy", "Gluten", "Eggs"],
        nutrition: { Calories: 310, Fat: "15g", Carbs: "28g", Protein: "14g" },
        ingredients:
          "Buffalo chicken, blue cheese, mozzarella, ranch, red onions",
        price: "$15.99",
      },
    ],
  },

  Pasta: {
    title: "Pasta",
    desc: "Experience the comforting embrace of authentic Italian pasta, where every forkful tells a story of tradition and taste. Our pasta is cooked al dente and paired with vibrant sauces and hand-selected vegetables, cheeses, and proteins to create a soulful plate of goodness.",
    items: [
      {
        name: "Veggie Primavera",
        allergens: ["Gluten", "Dairy"],
        nutrition: { Calories: 600, Fat: "22g", Carbs: "80g", Protein: "16g" },
        ingredients: "Spaghetti, veggies, garlic, olive oil, Parmesan",
        price: "$11.99",
      },
      {
        name: "Pesto Penne",
        allergens: ["Gluten", "Dairy", "Nuts"],
        nutrition: { Calories: 550, Fat: "20g", Carbs: "75g", Protein: "14g" },
        ingredients: "Penne pasta, basil pesto, cherry tomatoes, Parmesan",
        price: "$12.99",
      },
    ],
  },

  Sides: {
    title: "Sides",
    desc: "Complement your main course with our mouthwatering side dishes, crafted to add a burst of flavor and crunch. From spicy wings to crispy bites, our sides are perfect for sharing or savoring solo.",
    items: [
      {
        name: "Buffalo Wings",
        allergens: ["Dairy"],
        nutrition: { Calories: 430, Fat: "31g", Carbs: "6g", Protein: "32g" },
        ingredients: "Chicken wings, buffalo sauce, celery, blue cheese dip",
        price: "$8.99",
      },
      {
        name: "Garlic Bread",
        allergens: ["Gluten", "Dairy"],
        nutrition: { Calories: 220, Fat: "12g", Carbs: "25g", Protein: "5g" },
        ingredients: "Bread, garlic butter, parsley, mozzarella",
        price: "$5.99",
      },
    ],
  },

  Deserts: {
    title: "Desserts",
    desc: "Indulge your sweet tooth with our handcrafted desserts. From rich, velvety cakes to warm, gooey delights, our desserts are the perfect finale to your meal.",
    items: [
      {
        name: "Chocolate Lava Cake",
        allergens: ["Gluten", "Dairy", "Eggs"],
        nutrition: { Calories: 450, Fat: "30g", Carbs: "45g", Protein: "6g" },
        ingredients: "Dark chocolate, flour, eggs, butter, vanilla",
        price: "$6.99",
      },
      {
        name: "Tiramisu",
        allergens: ["Gluten", "Dairy", "Eggs"],
        nutrition: { Calories: 420, Fat: "28g", Carbs: "38g", Protein: "7g" },
        ingredients: "Ladyfingers, espresso, mascarpone, cocoa powder",
        price: "$7.49",
      },
    ],
  },

  Drinks: {
    title: "Drinks",
    desc: "Refresh your palate with our curated drink selections. Whether you're after a cool soda, a creamy shake, or a sparkling refresher, we have something to quench every thirst.",
    items: [
      {
        name: "Cola",
        allergens: [],
        nutrition: { Calories: 150, Fat: "0g", Carbs: "39g", Protein: "0g" },
        ingredients: "Carbonated water, sugar, caramel color, caffeine",
        price: "$2.49",
      },
      {
        name: "Lemon Iced Tea",
        allergens: [],
        nutrition: { Calories: 120, Fat: "0g", Carbs: "30g", Protein: "0g" },
        ingredients: "Brewed tea, lemon juice, sugar",
        price: "$2.99",
      },
    ],
  },
};

export default menuItems;
