import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../src/components/sections/Hero';

describe('Hero', () => {
  it('renders hero heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders name TIMOTEO', () => {
    render(<Hero />);
    expect(screen.getByText('TIMOTEO')).toBeInTheDocument();
  });

  it('renders sector label', () => {
    render(<Hero />);
    expect(screen.getAllByText('SECTOR.03A-77')[0]).toBeInTheDocument();
  });
});
