import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer content', () => {
    render(<Footer />);
    const footerElement = screen.getByText(/© 2024 My Recipe App. All rights reserved./i);
    expect(footerElement).toBeInTheDocument();
});
