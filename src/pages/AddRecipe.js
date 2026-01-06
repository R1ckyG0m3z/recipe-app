import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddRecipe.css';

const AddRecipe = ({ onAddRecipe }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: 'Breakfast',
    difficulty: 'Easy',
    time: '',
    servings: '',
    image: '',
    ingredients: [''],
    instructions: ['']
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = value;
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const addIngredientField = () => {
    setFormData({ ...formData, ingredients: [...formData.ingredients, ''] });
  };

  const removeIngredientField = (index) => {
    const newIngredients = formData.ingredients.filter((_, i) => i !== index);
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const handleInstructionChange = (index, value) => {
    const newInstructions = [...formData.instructions];
    newInstructions[index] = value;
    setFormData({ ...formData, instructions: newInstructions });
  };

  const addInstructionField = () => {
    setFormData({ ...formData, instructions: [...formData.instructions, ''] });
  };

  const removeInstructionField = (index) => {
    const newInstructions = formData.instructions.filter((_, i) => i !== index);
    setFormData({ ...formData, instructions: newInstructions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Filter out empty ingredients and instructions
    const cleanedData = {
      ...formData,
      id: Date.now(),
      servings: parseInt(formData.servings),
      ingredients: formData.ingredients.filter(ing => ing.trim() !== ''),
      instructions: formData.instructions.filter(inst => inst.trim() !== ''),
      image: formData.image || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400'
    };

    onAddRecipe(cleanedData);
    navigate('/');
  };

  return (
    <div className="add-recipe-container">
      <button onClick={() => navigate('/')} className="back-button">
        ← Back to Recipes
      </button>

      <div className="add-recipe-card">
        <div className="form-header">
          <h1 className="form-title">✨ Create New Recipe</h1>
          <p className="form-subtitle">Share your delicious recipe with the world</p>
        </div>

        <form onSubmit={handleSubmit} className="recipe-form">
          <div className="form-section">
            <h2 className="form-section-title">Basic Information</h2>
            
            <div className="form-group">
              <label htmlFor="name">Recipe Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g., Chocolate Chip Cookies"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Dessert">Dessert</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="difficulty">Difficulty *</label>
                <select
                  id="difficulty"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  required
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="time">Prep & Cook Time *</label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 30 minutes"
                />
              </div>

              <div className="form-group">
                <label htmlFor="servings">Servings *</label>
                <input
                  type="number"
                  id="servings"
                  name="servings"
                  value={formData.servings}
                  onChange={handleChange}
                  required
                  min="1"
                  placeholder="e.g., 4"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="image">Image URL (optional)</label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-section-title">Ingredients</h2>
            {formData.ingredients.map((ingredient, index) => (
              <div key={index} className="dynamic-field">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                  placeholder={`Ingredient ${index + 1}`}
                  required
                />
                {formData.ingredients.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeIngredientField(index)}
                    className="remove-btn"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addIngredientField}
              className="add-field-btn"
            >
              + Add Ingredient
            </button>
          </div>

          <div className="form-section">
            <h2 className="form-section-title">Instructions</h2>
            {formData.instructions.map((instruction, index) => (
              <div key={index} className="dynamic-field">
                <span className="step-number">{index + 1}</span>
                <textarea
                  value={instruction}
                  onChange={(e) => handleInstructionChange(index, e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  required
                  rows="3"
                />
                {formData.instructions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeInstructionField(index)}
                    className="remove-btn"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addInstructionField}
              className="add-field-btn"
            >
              + Add Step
            </button>
          </div>

          <div className="form-actions">
            <button type="button" onClick={() => navigate('/')} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Create Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
