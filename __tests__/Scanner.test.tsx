import React from 'react';
import { render, screen } from '@testing-library/react';
import Scanner from '../src/components/layout/Scanner';

describe('Scanner', () => {
  it('renders scanner label', () => {
    render(<Scanner />);
    expect(screen.getByText('Voltage Scan')).toBeInTheDocument();
  });

  it('renders initial progress as 0%', () => {
    render(<Scanner />);
    expect(screen.getByText('0%')).toBeInTheDocument();
  });
});
