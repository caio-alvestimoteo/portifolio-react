import React from 'react';
import { render, screen } from '@testing-library/react';
import Manifest from '../src/components/sections/Manifest';

describe('Manifest', () => {
  it('renders manifest heading', () => {
    render(<Manifest />);
    expect(screen.getByText('Momento Atual')).toBeInTheDocument();
  });

  it('renders radar technical heading', () => {
    render(<Manifest />);
    expect(screen.getByText('Radar técnico')).toBeInTheDocument();
  });
});
