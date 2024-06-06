import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import {axios} from 'axios';
import RecipeDetail from './RecipeDetail';

jest.mock('axios');

test('renders recipe details', async () => {
    const recipe = {
        id: 1,
        name: 'Recipe 1',
        image: 'image1.jpg',
        ingredients: ['ingredient 1', 'ingredient 2'],
        instructions: ['step 1', 'step 2'],
    };

    axios.get.mockResolvedValue({ data: recipe });

    render(
        <Router>
            <RecipeDetail />
        </Router>
    );

    await waitFor(() => {
        expect(screen.getByText(/Recipe 1/i)).toBeInTheDocument();
        expect(screen.getByText(/ingredient 1/i)).toBeInTheDocument();
        expect(screen.getByText(/step 1/i)).toBeInTheDocument();
    });
});
