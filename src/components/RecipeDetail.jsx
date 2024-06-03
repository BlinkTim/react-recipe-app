import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/recipes/${id}`)
      .then(response => {
        setRecipe(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading recipe: {error.message}</p>;
  }

  if (!recipe) {
    return <p>No recipe found.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl">{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover my-4" />
      <h3 className="text-xl">Ingredients</h3>
      <ul className="list-disc list-inside">
        {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="text-xl mt-4">Instructions</h3>
      <ol className="list-decimal list-inside">
        {recipe.instructions && recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
