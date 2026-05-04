import React from 'react';
import { render, screen } from '@testing-library/react';
import Metric from '../src/ui/Metric';
import type { Metric as MetricType } from '../src/types';

describe('Metric', () => {
  const mockMetric: MetricType = {
    label: 'IA Aplicada',
    value: 'Aprofundamento'
  };

  it('renders metric label and value', () => {
    render(<Metric metric={mockMetric} />);
    expect(screen.getByText('IA Aplicada')).toBeInTheDocument();
    expect(screen.getByText('Aprofundamento')).toBeInTheDocument();
  });
});
