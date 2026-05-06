import React from 'react';
import { render, screen } from '@testing-library/react';
import Project from '../src/components/sections/Project';

describe('Project', () => {
  it('renders project heading', () => {
    render(<Project />);
    expect(screen.getByText('04 / LABORATÓRIO PRÁTICO — JAIME // ASSISTENTE LOCAL DE IA')).toBeInTheDocument();
  });

  it('renders Jaime title', () => {
    render(<Project />);
    expect(screen.getByRole('heading', { level: 2, name: 'Jaime.' })).toBeInTheDocument();
  });
});
