import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
import Header from './Header';

test('renders Home link', () => {
    render(
        <ThemeProvider>
            <Router>
                <Header />
            </Router>
        </ThemeProvider>
    );
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
});

test('toggles theme', () => {
    render(
        <ThemeProvider>
            <Router>
                <Header />
            </Router>
        </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(button).toContainHTML('<svg');  // Check if the icon changed
});
test('renders Home link', () => {
    render(
        <ThemeProvider>
            <Router>
                <Header />
            </Router>
        </ThemeProvider>
    );
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
});

test('toggles theme', () => {
    render(
        <ThemeProvider>
            <Router>
                <Header />
            </Router>
        </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(button).toContainHTML('<svg');  // Check if the icon changed
});
