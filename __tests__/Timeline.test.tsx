import React from 'react';
import { render, screen } from '@testing-library/react';
import Timeline from '../src/components/sections/Timeline';

describe('Timeline', () => {
  it('renders timeline section', () => {
    render(<Timeline />);
    expect(screen.getByText('A jornada até a IA Aplicada')).toBeInTheDocument();
  });

  it('renders first entry title', () => {
    render(<Timeline />);
    expect(screen.getByText('Redes de Computadores')).toBeInTheDocument();
  });
});
