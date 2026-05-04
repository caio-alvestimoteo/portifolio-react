import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from '../src/ui/Badge';

describe('Badge', () => {
  it('renders badge content', () => {
    render(<Badge>Formação</Badge>);
    expect(screen.getByText('Formação')).toBeInTheDocument();
  });
});
