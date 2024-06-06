import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom'; // Wir verwenden MemoryRouter und Route aus react-router-dom, um die Komponente in einem Router zu testen
import RecipeDetail from './RecipeDetail';

describe('RecipeDetail', () => {
  test('renders recipe details', async () => {
    // Wir rendern die Komponente innerhalb eines MemoryRouter mit der Route /recipe/:id
    render(
      <MemoryRouter initialEntries={['/recipe/1']}>
        <Route path="/recipe/:id">
          <RecipeDetail />
        </Route>
      </MemoryRouter>
    );

    // Hier können wir die erwarteten Elemente überprüfen
    // Zum Beispiel:
    expect(screen.getByText('Loading...')).toBeInTheDocument(); // Wir überprüfen, ob der Text "Loading..." angezeigt wird, während das Rezept geladen wird
    // Weitere Überprüfungen, sobald das Rezept geladen ist
  });
});
