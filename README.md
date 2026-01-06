# Recipe App

A modern, user-friendly Recipe App built with React and JavaScript. Browse, search, and create delicious recipes with ease!

## Features

- **User Authentication**: Secure login system with persistent sessions
- **Personal Profile**: View and manage your favorite recipes in one place
- **Recipe Collection**: Browse through a wide variety of recipes including Breakfast, Lunch, Dinner, and Desserts
- **Search Functionality**: Search recipes by name or ingredients
- **Category Filtering**: Filter recipes by category (Breakfast, Lunch, Dinner, Dessert)
- **Recipe Details**: View detailed information including ingredients and step-by-step instructions
- **Favorite Recipes**: Add recipes to your favorites and access them from your profile
- **Add New Recipes**: Create and add your own recipes with a user-friendly form
- **Protected Routes**: All recipe pages require authentication for access
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
│   │   ├── RecipeCard.css
│   │   └── ProtectedRoute.js
│   ├── pages/
│   │   ├── RecipeList.js
│   │   ├── RecipeList.css
│   │   ├── RecipeDetails.js
│   │   ├── RecipeDetails.css
│   │   ├── AddRecipe.js
│   │   ├── AddRecipe.css
│   │   ├── Login.js
│   │   ├── Profile.js
│   │   └── Profile.css
│   ├── context/
│   │   └── AuthContext.js
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

### Logging In
1. When you first visit the app, you'll be redirected to the login page
2. Enter the demo credentials:
   - **Username**: `demo`
   - **Password**: `password`
3. Click "Login" to access the recipe app
4. Your session will be saved and persist even after page refresh

### Browsing Recipes
- View all recipes on the home page
- Click on any recipe card to see detailed information
- Use the heart icon (🤍/❤️) to add recipes to your favorites

### Searching Recipes
- Use the search bar to find recipes by name or ingredients
- Filter by category using the category buttons

### Managing Favorites
- Click the heart icon on any recipe card or recipe details page to add to favorites
- Click the heart again to remove from favorites
- View all your favorites on your profile page

### Your Profile
- Click "My Profile" in the navigation bar
- See your favorite recipes collection
- Remove favorites by clicking the ❌ button on recipe cards
- View recipe count statistics

### Adding a Recipe
1. Click the "+ Add Recipe" button in the navigation
2. Fill in the recipe details:
   - Basic information (name, category, difficulty, time, servings)
   - Ingredients (add multiple ingredients)
   - Instructions (add step-by-step instructions)
3. Click "Create Recipe" to add it to the collection

### Logging Out
- Click the "Logout" button in the navigation bar
- You'll be redirected to the login page
- Your favorites are saved and will be restored when you log back in

## Authentication

The app uses a context-based authentication system with the following features:

- **Protected Routes**: All recipe pages require authentication
- **Persistent Sessions**: Login state is saved in localStorage
- **Per-User Data**: Each user has their own favorite recipes collection
- **Auto-Redirect**: Unauthenticated users are redirected to the login page

### Demo Credentials
- **Username**: demo
- **Password**: password

Note: This is a demo application with mock authentication. In a production environment, this would be connected to a real backend API with secure authentication.

## Features Overview

### Login Page
- Clean, user-friendly login form
- Input validation
- Error messaging for invalid credentials
- Demo credentials displayed for easy access
- Persistent authentication using localStorage

### Personal Profile
- User avatar and welcome message
- Statistics showing favorite recipe count
- Grid display of all favorite recipes
- Quick remove favorite functionality
- Direct links to view recipe details
- Empty state with call-to-action when no favorites

### Main Recipe List
- Grid layout with recipe cards
- Each card displays:
  - Recipe image
  - Recipe name
  - Category badge
  - Cooking time
  - Difficulty level
  - Servings
  - Favorite heart icon

### Recipe Details Page
- Full recipe information
- Ingredients list
- Step-by-step instructions
- Quick info panel with time, servings, and difficulty
- Large "Add to Favorites" button
- Delete option for user-created recipes

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
