import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }
  , []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map(recipe => (
        <div key={recipe.id} className="border p-4 rounded">
          <img src={recipe.image} alt={recipe.name} className="h-48 w-full object-cover mb-4" />
          <h2 className="text-xl font-bold">{recipe.name}</h2>
          <Link to={`/recipe/${recipe.id}`} className="text-blue-500">View Recipe</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;