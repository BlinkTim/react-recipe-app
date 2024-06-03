import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/recipes')
      .then(response => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading recipes: {error.message}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {recipes.map(recipe => (
        <div key={recipe.id} className="border p-4 rounded-lg">
          <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
          <h2 className="text-xl mt-2">{recipe.name}</h2>
          <Link to={`/recipe/${recipe.id}`} className="text-blue-500">View Recipe</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
