# Recipe App

A modern, user-friendly Recipe App built with React and JavaScript. Browse, search, and create delicious recipes with ease!

## Features

- **Recipe Collection**: Browse through a wide variety of recipes including Breakfast, Lunch, Dinner, and Desserts
- **Search Functionality**: Search recipes by name or ingredients
- **Category Filtering**: Filter recipes by category (Breakfast, Lunch, Dinner, Dessert)
- **Recipe Details**: View detailed information including ingredients and step-by-step instructions
- **Add New Recipes**: Create and add your own recipes with a user-friendly form
- **Card Layout**: Beautiful card-based UI for displaying recipes
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Installation

1. Navigate to the project directory:
   ```bash
   cd recipe-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
recipe-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── RecipeCard.js
│   │   └── RecipeCard.css
│   ├── pages/
│   │   ├── RecipeList.js
│   │   ├── RecipeList.css
│   │   ├── RecipeDetails.js
│   │   ├── RecipeDetails.css
│   │   ├── AddRecipe.js
│   │   └── AddRecipe.css
│   ├── data/
│   │   └── recipes.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Technologies Used

- **React 18**: Modern JavaScript library for building user interfaces
- **React Router DOM**: Navigation and routing
- **CSS3**: Custom styling with modern features
- **JavaScript ES6+**: Modern JavaScript features

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (one-way operation)

## Usage

### Browsing Recipes
- View all recipes on the home page
- Click on any recipe card to see detailed information

### Searching Recipes
- Use the search bar to find recipes by name or ingredients
- Filter by category using the category buttons

### Adding a Recipe
1. Click the "+ Add Recipe" button in the navigation
2. Fill in the recipe details:
   - Basic information (name, category, difficulty, time, servings)
   - Ingredients (add multiple ingredients)
   - Instructions (add step-by-step instructions)
3. Click "Create Recipe" to add it to the collection

## Features Overview

### Main Recipe List
- Grid layout with recipe cards
- Each card displays:
  - Recipe image
  - Recipe name
  - Category badge
  - Cooking time
  - Difficulty level
  - Servings

### Recipe Details Page
- Full recipe information
- Ingredients list
- Step-by-step instructions
- Quick info panel with time, servings, and difficulty

### Add Recipe Form
- Dynamic ingredient fields
- Dynamic instruction fields
- Form validation
- Category and difficulty dropdowns
- Optional image URL input

## Contributing

Feel free to fork this project and add your own features!

## License

MIT License - feel free to use this project for learning and development.
