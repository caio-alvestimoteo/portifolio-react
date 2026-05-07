import type { Stat, Metric, TimelineEntry, ChipItem, StackGroup } from '../../src/types';

export const makeStat = (overrides?: Partial<Stat>): Stat => ({
  id: 'test-stat',
  value: '15+',
  label: 'anos de experiência',
  description: 'Descrição de teste',
  ...overrides,
});

export const makeMetric = (overrides?: Partial<Metric>): Metric => ({
  label: 'IA Aplicada',
  value: 'Aprofundamento',
  ...overrides,
});

export const makeTimelineEntry = (overrides?: Partial<TimelineEntry>): TimelineEntry => ({
  id: 'test-entry',
  year: 2000,
  code: '01',
  title: 'Redes de Computadores',
  period: '2000 — 2005',
  badge: 'Formação',
  company: 'Faculdade Teste',
  description: 'Descrição de teste',
  ...overrides,
});

export const makeChipItem = (overrides?: Partial<ChipItem>): ChipItem => ({
  name: 'Node.js',
  ...overrides,
});

export const makeStackGroup = (overrides?: Partial<StackGroup>): StackGroup => ({
  num: '01',
  title: 'IA Aplicada',
  sub: 'foco atual',
  featured: false,
  tags: [{ label: 'Teste' }],
  ...overrides,
});
