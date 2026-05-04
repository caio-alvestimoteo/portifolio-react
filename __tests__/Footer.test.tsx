import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/sections/Footer';

describe('Footer', () => {
  it('renders footer heading', () => {
    render(<Footer />);
    expect(screen.getByText('Uma trajetória em constante evolução')).toBeInTheDocument();
  });

  it('renders footer summary', () => {
    render(<Footer />);
    expect(
      screen.getByText(/Esta timeline apresenta minha evolução profissional sem vender uma falsa especialização/i)
    ).toBeInTheDocument();
  });
});
