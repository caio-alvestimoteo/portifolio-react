import React from 'react';
import { render, screen } from '@testing-library/react';
import Chip from '../src/ui/Chip';

describe('Chip', () => {
  it('renders children correctly', () => {
    render(<Chip>Node.js</Chip>);
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });
});
