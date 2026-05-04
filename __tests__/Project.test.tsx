import React from 'react';
import { render, screen } from '@testing-library/react';
import Project from '../src/components/sections/Project';

describe('Project', () => {
  it('renders project heading', () => {
    render(<Project />);
    expect(screen.getByText('Laboratório Prático')).toBeInTheDocument();
  });

  it('renders Jaime title', () => {
    render(<Project />);
    expect(screen.getByText('Jaime')).toBeInTheDocument();
  });
});
