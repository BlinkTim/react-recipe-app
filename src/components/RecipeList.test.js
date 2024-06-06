import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import{axios} from 'axios';
import RecipeList from './RecipeList';

jest.mock('axios');

const mockRecipes = [
    {
        id: 1,
        name: 'Spaghetti Carbonara',
        image: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
        id: 2,
        name: 'Chicken Curry',
        image: 'https://source.unsplash.com/random/200x200?sig=2',
    },
];

test('renders recipe list', async () => {
    axios.get.mockResolvedValue({ data: mockRecipes });

    render(<RecipeList />);

    await waitFor(() => {
        const recipeElements = screen.getAllByRole('img');
        expect(recipeElements).toHaveLength(mockRecipes.length);
    });

    mockRecipes.forEach(recipe => {
        expect(screen.getByText(recipe.name)).toBeInTheDocument();
    });
});
