import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
      name: "Boilded Egg",
      price: 10,
      text: "A boiled egg is a simple yet nutritious food, rich in protein and essential vitamins. It is prepared by boiling an egg in water until the yolk and white solidify.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Ramen is a popular Japanese noodle dish consisting of wheat noodles served in a flavorful broth. It comes in various styles, such as shoyu (soy sauce), miso, tonkotsu (pork bone), and shio (salt)",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Grilled chicken is a healthy and delicious dish made by marinating chicken in flavorful spices and grilling it until tender and juicy.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "A cake is a soft, sweet baked dessert made from flour, sugar, eggs, butter, and a leavening agent. Cakes come in many varieties, including chocolate cake, vanilla sponge cake, red velvet, and cheesecakes.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "A burger is a popular fast-food item consisting of a grilled or fried meat patty (typically beef or chicken) served in a bun with various toppings like lettuce, tomato, cheese, pickles, and sauces.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Pancakes are soft, fluffy flat cakes made from a simple batter of flour, eggs, milk, and baking powder. They are cooked on a griddle and often served with syrup, butter, fruits, or chocolate chips.",
      image: "/images/pancake.png",
      type: "dinner",
    },
  ];

  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
