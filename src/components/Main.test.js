import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders main content', () => {
    render(<Main>Main Content</Main>);
    const mainElement = screen.getByText(/Main Content/i);
    expect(mainElement).toBeInTheDocument();
});
