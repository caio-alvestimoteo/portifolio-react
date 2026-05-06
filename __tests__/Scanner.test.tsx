import React from 'react';
import { render, screen } from '@testing-library/react';
import Scanner from '../src/components/layout/Scanner';

describe('Scanner', () => {
  it('renders progressbar output for screen readers', () => {
    render(<Scanner />);
    expect(screen.getByText('Progress 0%')).toBeInTheDocument();
  });

  it('renders initial progress state', () => {
    render(<Scanner />);
    expect(screen.getByText('Progress 0%')).toBeInTheDocument();
  });
});
