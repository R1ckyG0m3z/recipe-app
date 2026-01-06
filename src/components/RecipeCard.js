import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const { isFavorite, addFavorite, removeFavorite } = useAuth();
  const favorite = isFavorite(recipe.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (favorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card-link">
      <div className="recipe-card">
        <div className="recipe-image-container">
          <img src={recipe.image} alt={recipe.name} className="recipe-image" />
          <span className="recipe-category">{recipe.category}</span>
          <button 
            className={`favorite-icon ${favorite ? 'favorited' : ''}`}
            onClick={handleFavoriteClick}
            title={favorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {favorite ? '❤️' : '🤍'}
          </button>
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-name">{recipe.name}</h3>
          <div className="recipe-meta">
            <span className="recipe-time">⏱️ {recipe.time}</span>
            <span className="recipe-difficulty">📊 {recipe.difficulty}</span>
          </div>
          <div className="recipe-servings">
            🍽️ Servings: {recipe.servings}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
