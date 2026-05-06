import React from 'react';
import { render, screen } from '@testing-library/react';
import Manifest from '../src/components/sections/Manifest';

describe('Manifest', () => {
  it('renders manifest heading', () => {
    render(<Manifest />);
    expect(screen.getByText('MOMENTO')).toBeInTheDocument();
  });

  it('renders radar technical heading', () => {
    render(<Manifest />);
    expect(screen.getByText('RADAR TÉCNICO')).toBeInTheDocument();
  });
});
