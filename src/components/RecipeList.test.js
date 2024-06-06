import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RecipeList from './RecipeList';


// Wichtig, das hier für den globalen Mock vom fetch
describe('RecipeList component', () => {
  // BeforeEach wird vor jedem Test ausgeführt
  // Hier wird der fetch Mock definiert
  // Der Mock gibt ein Array von zwei Rezepten zurück
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([
          // Erstmal ohne IMG
          { id: 1, name: 'Spaghetti Carbonara' },
          { id: 2, name: 'Caesar Salad' }
        ])
      })
    );
  });

  // AfterEach wird nach jedem Test ausgeführt
  // Hier wird der fetch Mock zurückgesetzt
  // Einfach der Sauberkeit halber
  afterEach(() => {
    jest.restoreAllMocks();
  });

  // Test Nummmer 1
  // Hier wird einfach nur gerendert
  // Es wird kein Fetch Mock benötigt
  test('rendert ganz normal', () => {
    render(
      <Router>
        <RecipeList />
      </Router>
    );
  });

  // Test Nummer 2
  // Hier wird der Fetch Mock benötigt
  // Es wird überprüft ob fetch aufgerufen wird
  // Und ob die Rezepte gerendert werden
  test('fetcht sich die Recipes und zeigt sie an', async () => {
    render(
      <Router>
        <RecipeList />
      </Router>
    );

    // Hier wird überprüft ob fetch aufgerufen wird bzw. auch die richtige URL
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/recipes');

    // Hier wird gewartet bis die Rezepte gerendert werden
    await waitFor(() => {
      // Hier wird überprüft ob die Rezepte gerendert werden
      expect(screen.getByText('Spaghetti Carbonara')).toBeInTheDocument();
      expect(screen.getByText('Caesar Salad')).toBeInTheDocument();
    });

  });

  // Test Nummer 3
  // Hier wird der Fetch Mock benötigt
  // Es wird überprüft ob die Links zu den Rezepten korrekt sind
  test('rendert auch die Recipe-Links für die Details korrekt', async () => {
    render(
      <Router>
        <RecipeList />
      </Router>
    );

    // Hier wird gewartet bis die Rezepte gerendert werden
    await waitFor(() => {
      // Hier wird überprüft ob die Links korrekt sind
      // Erstmal müssen wir uns alle Links sammeln, die "View Recipe" heißen
      const links = screen.getAllByText('View Recipe');
      expect(links[0]).toHaveAttribute('href', '/recipe/1');
      expect(links[1]).toHaveAttribute('href', '/recipe/2');
    });
  });
});
