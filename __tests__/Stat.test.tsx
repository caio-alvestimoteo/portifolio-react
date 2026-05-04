import React from 'react';
import { render, screen } from '@testing-library/react';
import Stat from '../src/ui/Stat';
import type { Stat as StatType } from '../src/types';

describe('Stat', () => {
  const mockStat: StatType = {
    id: 'test',
    value: '15+',
    label: 'anos de experiência',
    description: 'Test description'
  };

  it('renders stat value and label', () => {
    render(<Stat stat={mockStat} />);
    expect(screen.getByText('15+')).toBeInTheDocument();
    expect(screen.getByText('anos de experiência')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<Stat stat={mockStat} />);
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });
});
