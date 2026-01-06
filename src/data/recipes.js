const recipes = [
  {
    id: 1,
    name: "Classic Pancakes",
    category: "Breakfast",
    difficulty: "Easy",
    time: "20 minutes",
    servings: 4,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
    ingredients: [
      "1½ cups all-purpose flour",
      "3½ tsp baking powder",
      "1 tsp salt",
      "1 tbsp white sugar",
      "1¼ cups milk",
      "1 egg",
      "3 tbsp butter, melted"
    ],
    instructions: [
      "In a large bowl, sift together the flour, baking powder, salt and sugar.",
      "Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.",
      "Heat a lightly oiled griddle or frying pan over medium-high heat.",
      "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
      "Brown on both sides and serve hot."
    ]
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    category: "Dinner",
    difficulty: "Medium",
    time: "30 minutes",
    servings: 4,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
    ingredients: [
      "400g spaghetti",
      "200g pancetta or bacon",
      "4 large eggs",
      "100g Parmesan cheese, grated",
      "2 cloves garlic, minced",
      "Salt and black pepper to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Cook spaghetti according to package directions in salted boiling water.",
      "While pasta cooks, fry pancetta in a large pan until crispy.",
      "In a bowl, whisk together eggs and Parmesan cheese.",
      "Drain pasta, reserving 1 cup of pasta water.",
      "Add hot pasta to the pan with pancetta, remove from heat.",
      "Quickly stir in egg mixture, adding pasta water to create a creamy sauce.",
      "Season with black pepper and garnish with parsley."
    ]
  },
  {
    id: 3,
    name: "Chicken Caesar Salad",
    category: "Lunch",
    difficulty: "Easy",
    time: "25 minutes",
    servings: 2,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400",
    ingredients: [
      "2 chicken breasts",
      "1 head romaine lettuce",
      "½ cup Caesar dressing",
      "½ cup croutons",
      "¼ cup Parmesan cheese, shaved",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "Lemon wedges"
    ],
    instructions: [
      "Season chicken breasts with salt and pepper.",
      "Heat olive oil in a pan and cook chicken until golden, about 6-7 minutes per side.",
      "Let chicken rest, then slice into strips.",
      "Chop romaine lettuce and place in a large bowl.",
      "Add Caesar dressing and toss well.",
      "Top with chicken strips, croutons, and Parmesan cheese.",
      "Serve with lemon wedges."
    ]
  },
  {
    id: 4,
    name: "Chocolate Chip Cookies",
    category: "Dessert",
    difficulty: "Easy",
    time: "35 minutes",
    servings: 24,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
    ingredients: [
      "2¼ cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup butter, softened",
      "¾ cup granulated sugar",
      "¾ cup packed brown sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "2 cups chocolate chips"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Combine flour, baking soda, and salt in a bowl.",
      "Beat butter and both sugars until creamy.",
      "Add eggs and vanilla; beat well.",
      "Gradually blend in flour mixture.",
      "Stir in chocolate chips.",
      "Drop rounded tablespoons onto ungreased cookie sheets.",
      "Bake 9-11 minutes or until golden brown."
    ]
  },
  {
    id: 5,
    name: "Vegetable Stir Fry",
    category: "Dinner",
    difficulty: "Easy",
    time: "25 minutes",
    servings: 4,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
    ingredients: [
      "2 cups broccoli florets",
      "1 red bell pepper, sliced",
      "1 yellow bell pepper, sliced",
      "2 carrots, sliced",
      "1 cup snap peas",
      "3 tbsp soy sauce",
      "2 tbsp sesame oil",
      "2 cloves garlic, minced",
      "1 tbsp fresh ginger, grated",
      "2 tbsp vegetable oil",
      "Sesame seeds for garnish"
    ],
    instructions: [
      "Heat vegetable oil in a large wok or skillet over high heat.",
      "Add garlic and ginger; stir-fry for 30 seconds.",
      "Add carrots and broccoli; stir-fry for 3 minutes.",
      "Add bell peppers and snap peas; continue cooking for 3 minutes.",
      "Add soy sauce and sesame oil; toss well.",
      "Cook until vegetables are tender-crisp.",
      "Garnish with sesame seeds and serve over rice."
    ]
  },
  {
    id: 6,
    name: "Blueberry Smoothie Bowl",
    category: "Breakfast",
    difficulty: "Easy",
    time: "10 minutes",
    servings: 2,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400",
    ingredients: [
      "2 cups frozen blueberries",
      "1 banana",
      "½ cup Greek yogurt",
      "¼ cup almond milk",
      "1 tbsp honey",
      "Toppings: granola, fresh berries, coconut flakes, chia seeds"
    ],
    instructions: [
      "Add frozen blueberries, banana, yogurt, almond milk, and honey to a blender.",
      "Blend until smooth and thick.",
      "Pour into bowls.",
      "Top with granola, fresh berries, coconut flakes, and chia seeds.",
      "Serve immediately."
    ]
  },
  {
    id: 7,
    name: "Beef Tacos",
    category: "Dinner",
    difficulty: "Easy",
    time: "30 minutes",
    servings: 6,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400",
    ingredients: [
      "1 lb ground beef",
      "1 packet taco seasoning",
      "12 taco shells",
      "1 cup shredded lettuce",
      "1 cup diced tomatoes",
      "1 cup shredded cheddar cheese",
      "½ cup sour cream",
      "¼ cup diced onions",
      "Salsa and hot sauce"
    ],
    instructions: [
      "Brown ground beef in a large skillet over medium heat.",
      "Drain excess fat.",
      "Add taco seasoning and water according to package directions.",
      "Simmer for 5 minutes.",
      "Warm taco shells according to package instructions.",
      "Fill shells with seasoned beef.",
      "Top with lettuce, tomatoes, cheese, sour cream, and onions.",
      "Serve with salsa and hot sauce."
    ]
  },
  {
    id: 8,
    name: "Caprese Sandwich",
    category: "Lunch",
    difficulty: "Easy",
    time: "10 minutes",
    servings: 2,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400",
    ingredients: [
      "4 slices ciabatta bread",
      "8 oz fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "2 tbsp balsamic glaze",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Drizzle bread slices with olive oil.",
      "Toast bread lightly until golden.",
      "Layer mozzarella and tomato slices on two bread slices.",
      "Add fresh basil leaves.",
      "Season with salt and pepper.",
      "Drizzle with balsamic glaze.",
      "Top with remaining bread slices and serve."
    ]
  },
  {
    id: 9,
    name: "Tiramisu",
    category: "Dessert",
    difficulty: "Medium",
    time: "45 minutes (plus chilling)",
    servings: 8,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400",
    ingredients: [
      "6 egg yolks",
      "¾ cup sugar",
      "1⅓ cups mascarpone cheese",
      "1¾ cups heavy cream",
      "2 cups strong espresso, cooled",
      "3 tbsp coffee liqueur",
      "2 packages ladyfinger cookies",
      "Cocoa powder for dusting"
    ],
    instructions: [
      "Whisk egg yolks and sugar until thick and pale.",
      "Add mascarpone and whisk until smooth.",
      "In separate bowl, whip heavy cream to stiff peaks.",
      "Fold whipped cream into mascarpone mixture.",
      "Combine espresso and coffee liqueur.",
      "Dip ladyfingers briefly in espresso mixture.",
      "Layer dipped ladyfingers in a dish, spread half the cream mixture.",
      "Repeat layers, dust with cocoa powder.",
      "Refrigerate at least 4 hours before serving."
    ]
  },
  {
    id: 10,
    name: "Greek Salad",
    category: "Lunch",
    difficulty: "Easy",
    time: "15 minutes",
    servings: 4,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400",
    ingredients: [
      "3 large tomatoes, chopped",
      "1 cucumber, sliced",
      "1 red onion, sliced",
      "1 green bell pepper, chopped",
      "1 cup Kalamata olives",
      "200g feta cheese, cubed",
      "¼ cup olive oil",
      "2 tbsp red wine vinegar",
      "1 tsp dried oregano",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Combine tomatoes, cucumber, onion, and bell pepper in a large bowl.",
      "Add Kalamata olives and feta cheese.",
      "In a small bowl, whisk together olive oil, vinegar, and oregano.",
      "Pour dressing over salad and toss gently.",
      "Season with salt and pepper.",
      "Let sit for 10 minutes before serving to allow flavors to meld."
    ]
  },
  {
    id: 11,
    name: "Grilled Salmon",
    category: "Dinner",
    difficulty: "Medium",
    time: "25 minutes",
    servings: 4,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
    ingredients: [
      "4 salmon fillets",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 lemon, sliced",
      "2 tbsp fresh dill, chopped",
      "Salt and pepper to taste",
      "Lemon wedges for serving"
    ],
    instructions: [
      "Preheat grill to medium-high heat.",
      "Brush salmon with olive oil and season with salt and pepper.",
      "Sprinkle minced garlic over salmon.",
      "Place lemon slices on top of each fillet.",
      "Grill skin-side down for 6-8 minutes.",
      "Carefully flip and grill for another 4-6 minutes.",
      "Garnish with fresh dill and serve with lemon wedges."
    ]
  },
  {
    id: 12,
    name: "French Toast",
    category: "Breakfast",
    difficulty: "Easy",
    time: "20 minutes",
    servings: 4,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400",
    ingredients: [
      "8 slices thick bread",
      "4 large eggs",
      "1 cup milk",
      "2 tsp vanilla extract",
      "1 tsp cinnamon",
      "2 tbsp butter",
      "Maple syrup",
      "Powdered sugar",
      "Fresh berries"
    ],
    instructions: [
      "In a shallow bowl, whisk together eggs, milk, vanilla, and cinnamon.",
      "Heat butter in a large skillet over medium heat.",
      "Dip bread slices in egg mixture, coating both sides.",
      "Cook in skillet until golden brown, about 2-3 minutes per side.",
      "Transfer to plates.",
      "Dust with powdered sugar and top with fresh berries.",
      "Serve with maple syrup."
    ]
  }
];

export default recipes;
