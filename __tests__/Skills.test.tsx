import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../src/components/sections/Skills';

describe('Skills', () => {
  it('renders skills heading', () => {
    render(<Skills />);
    expect(screen.getByText('Competências, formação e idiomas')).toBeInTheDocument();
  });

  it('renders education heading', () => {
    render(<Skills />);
    expect(screen.getByText('Formação e idiomas')).toBeInTheDocument();
  });
});
