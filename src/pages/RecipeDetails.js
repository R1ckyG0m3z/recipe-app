import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './RecipeDetails.css';

const RecipeDetails = ({ recipes, onDeleteRecipe }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavorite, addFavorite, removeFavorite } = useAuth();
  const recipe = recipes.find((r) => r.id === parseInt(id));
  
  // User-created recipes have timestamp IDs (> 12), original recipes have IDs 1-12
  const isUserCreated = recipe && recipe.id > 12;
  const favorite = recipe && isFavorite(recipe.id);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      onDeleteRecipe(recipe.id);
      navigate('/');
    }
  };

  const handleFavoriteToggle = () => {
    if (favorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  if (!recipe) {
    return (
      <div className="recipe-details-container">
        <div className="not-found">
          <h2>Recipe not found</h2>
          <button onClick={() => navigate('/')} className="back-btn">
            Back to Recipes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="recipe-details-container">
      <div className="recipe-details-header-buttons">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Recipes
        </button>
        {isUserCreated && (
          <button onClick={handleDelete} className="delete-button">
            🗑️ Delete Recipe
          </button>
        )}
      </div>

      <div className="recipe-details-card">
        <div className="recipe-header">
          <div className="recipe-header-content">
            <h1 className="recipe-title">{recipe.name}</h1>
            <div className="recipe-badges">
              <span className="badge category-badge">{recipe.category}</span>
              <span className="badge difficulty-badge">{recipe.difficulty}</span>
            </div>
          </div>
          <button 
            className={`favorite-detail-btn ${favorite ? 'favorited' : ''}`}
            onClick={handleFavoriteToggle}
            title={favorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {favorite ? '❤️ Favorited' : '🤍 Add to Favorites'}
          </button>
        </div>

        <div className="recipe-image-detail">
          <img src={recipe.image} alt={recipe.name} />
        </div>

        <div className="recipe-info-section">
          <div className="info-card">
            <div className="info-item">
              <span className="info-icon">⏱️</span>
              <div>
                <div className="info-label">Prep & Cook Time</div>
                <div className="info-value">{recipe.time}</div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🍽️</span>
              <div>
                <div className="info-label">Servings</div>
                <div className="info-value">{recipe.servings}</div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📊</span>
              <div>
                <div className="info-label">Difficulty</div>
                <div className="info-value">{recipe.difficulty}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="recipe-content">
          <div className="ingredients-section">
            <h2 className="section-title">🥘 Ingredients</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  <span className="ingredient-bullet">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="instructions-section">
            <h2 className="section-title">👨‍🍳 Instructions</h2>
            <ol className="instructions-list">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="instruction-item">
                  <span className="instruction-number">{index + 1}</span>
                  <span className="instruction-text">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
