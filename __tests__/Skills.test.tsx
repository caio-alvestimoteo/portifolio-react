import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../src/components/sections/Skills';

describe('Skills', () => {
  it('renders skills heading', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { level: 2, name: 'COMPETÊNCIAS.' })).toBeInTheDocument();
  });

  it('renders stack subtitle', () => {
    render(<Skills />);
    expect(screen.getByText('Stack core, formação e idiomas')).toBeInTheDocument();
  });
});
