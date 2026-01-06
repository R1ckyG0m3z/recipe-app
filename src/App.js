import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './pages/RecipeList';
import RecipeDetails from './pages/RecipeDetails';
import AddRecipe from './pages/AddRecipe';
import recipesData from './data/recipes';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState(recipesData);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              🍳 Recipe App
            </Link>
            <div className="nav-links">
              <Link to="/" className="nav-link">All Recipes</Link>
              <Link to="/add" className="nav-link add-recipe-link">
                + Add Recipe
              </Link>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<RecipeList recipes={recipes} />} />
            <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} onDeleteRecipe={handleDeleteRecipe} />} />
            <Route path="/add" element={<AddRecipe onAddRecipe={handleAddRecipe} />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>© 2026 Recipe App. Made with ❤️ for food lovers</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
