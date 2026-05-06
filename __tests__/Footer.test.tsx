import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/sections/Footer';

describe('Footer', () => {
  it('renders footer heading', () => {
    render(<Footer />);
    expect(screen.getByText(/FIM/i)).toBeInTheDocument();
  });

  it('renders footer summary', () => {
    render(<Footer />);
    expect(screen.getByText(/Suporte, front-end, e-commerce, integrações, liderança técnica/i)).toBeInTheDocument();
  });
});
