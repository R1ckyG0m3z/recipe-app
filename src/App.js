import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import RecipeList from './pages/RecipeList';
import RecipeDetails from './pages/RecipeDetails';
import AddRecipe from './pages/AddRecipe';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import recipesData from './data/recipes';
import './App.css';

function AppContent() {
  const [recipes, setRecipes] = useState(recipesData);
  const { isAuthenticated, user, logout } = useAuth();

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            🍳 Recipe App
          </Link>
          <div className="nav-links">
            {isAuthenticated ? (
              <>
                <Link to="/" className="nav-link">All Recipes</Link>
                <Link to="/add" className="nav-link add-recipe-link">
                  + Add Recipe
                </Link>
                <Link to="/profile" className="nav-link profile-link">
                  👤 My Profile
                </Link>
                <div className="user-info">
                  <span className="username">{user}</span>
                  <button onClick={handleLogout} className="logout-button">
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <Link to="/login" className="nav-link">Login</Link>
            )}
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/" replace /> : <Login />
          } />
          <Route path="/" element={
            <ProtectedRoute>
              <RecipeList recipes={recipes} />
            </ProtectedRoute>
          } />
          <Route path="/recipe/:id" element={
            <ProtectedRoute>
              <RecipeDetails recipes={recipes} onDeleteRecipe={handleDeleteRecipe} />
            </ProtectedRoute>
          } />
          <Route path="/add" element={
            <ProtectedRoute>
              <AddRecipe onAddRecipe={handleAddRecipe} />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile recipes={recipes} />
            </ProtectedRoute>
          } />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 Recipe App. Made with ❤️ for food lovers</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
