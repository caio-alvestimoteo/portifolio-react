import React from 'react';
import { render, screen } from '@testing-library/react';
import Stat from '../src/ui/Stat';

const mockStat = {
  id: 'years',
  value: '15+',
  label: 'anos de experiência',
  description: 'Test description'
};

describe('Stat', () => {
  it('renders value', () => {
    render(<Stat stat={mockStat} />);
    expect(screen.getByText('15+')).toBeInTheDocument();
  });

  it('renders compact label', () => {
    render(<Stat stat={mockStat} />);
    expect(screen.getByText('anos de experiência')).toBeInTheDocument();
  });
});
