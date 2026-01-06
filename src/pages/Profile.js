import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Profile.css';

function Profile({ recipes }) {
  const { user, favorites, removeFavorite } = useAuth();

  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">👤</div>
        <h1 className="profile-title">Welcome, {user}!</h1>
        <p className="profile-subtitle">Your personal recipe collection</p>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <div className="stat-number">{favoriteRecipes.length}</div>
          <div className="stat-label">Favorite Recipes</div>
        </div>
      </div>

      <div className="favorites-section">
        <h2 className="section-title">❤️ My Favorite Recipes</h2>
        
        {favoriteRecipes.length === 0 ? (
          <div className="empty-favorites">
            <p className="empty-icon">📭</p>
            <p className="empty-text">No favorite recipes yet!</p>
            <p className="empty-subtext">Start adding recipes to your favorites by clicking the heart icon</p>
            <Link to="/" className="browse-link">Browse Recipes</Link>
          </div>
        ) : (
          <div className="favorites-grid">
            {favoriteRecipes.map(recipe => (
              <div key={recipe.id} className="favorite-card">
                <div className="favorite-image-container">
                  <img src={recipe.image} alt={recipe.name} className="favorite-image" />
                  <button 
                    className="remove-favorite-btn"
                    onClick={() => removeFavorite(recipe.id)}
                    title="Remove from favorites"
                  >
                    ❌
                  </button>
                </div>
                <div className="favorite-content">
                  <h3 className="favorite-name">{recipe.name}</h3>
                  <div className="favorite-meta">
                    <span className="favorite-time">🕐 {recipe.cookingTime}</span>
                    <span className="favorite-difficulty">{recipe.difficulty}</span>
                  </div>
                  <Link to={`/recipe/${recipe.id}`} className="view-recipe-btn">
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
