import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RecipeList from './RecipeList';

// Mock für den fetch-Aufruf
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
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
    ]),
  })
);

describe('RecipeList', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders recipes', async () => {
    render(
      <Router>
        <RecipeList />
      </Router>
    );

    // Überprüfen, ob die Rezepte nach dem Abruf angezeigt werden
    await waitFor(() => {
      expect(screen.getByText('Spaghetti Carbonara')).toBeInTheDocument();
      expect(screen.getByText('Chicken Curry')).toBeInTheDocument();
    });

    // Überprüfen, ob die Bilder und Links korrekt sind
    expect(screen.getByAltText('Spaghetti Carbonara')).toBeInTheDocument();
    expect(screen.getByAltText('Chicken Curry')).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links[0].getAttribute('href')).toBe('/recipe/1');
    expect(links[1].getAttribute('href')).toBe('/recipe/2');
  });
});
