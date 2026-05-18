import type { FC } from 'react';
import type { Metric as MetricType } from '../types';
import styled from 'styled-components';
import { tokens } from '../tokens';

const RadarItem = styled.div.withConfig({ componentId: 'metric' })`
  border: 1px solid rgba(239, 234, 224, 0.2);
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.04);
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
  cursor: default;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background: ${tokens.yellow};
    transition: width 0.25s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${tokens.yellow};
    transform: translateX(4px);
  }

  &:hover::before { width: 4px; }
`;

const RadarLabel = styled.div.withConfig({ componentId: 'metric__label' })`
  font-size: 14px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${tokens.yellow};
  margin-bottom: 4px;
`;

const RadarValue = styled.div.withConfig({ componentId: 'metric__value' })`
  font-size: 14px;
  color: ${tokens.bg};
`;

interface MetricProps {
  metric: MetricType;
}

const Metric: FC<MetricProps> = ({ metric }) => (
  <RadarItem>
    <RadarLabel>{metric.label}</RadarLabel>
    <RadarValue>{metric.value}</RadarValue>
  </RadarItem>
);

export default Metric;
