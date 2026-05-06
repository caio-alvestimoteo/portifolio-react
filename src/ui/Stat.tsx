import type { FC } from 'react';
import type { Stat as StatType } from '../types';
import styled from 'styled-components';
import { tokens } from '../tokens';

const Value = styled.div`
  font-family: ${tokens.fontDisplay};
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1;
  color: ${tokens.ink};
  transition: color 0.2s;
`;

const Label = styled.div`
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${tokens.muted};
  margin-top: 4px;
  line-height: 1.3;
`;

const StatWrap = styled.div`
  transition: transform 0.2s;
  cursor: default;

  &:hover { transform: translateY(-2px); }
  &:hover ${Value} { color: ${tokens.red}; }
`;

interface StatProps {
  stat: StatType;
}

const Stat: FC<StatProps> = ({ stat }) => (
  <StatWrap>
    <Value>{stat.value}</Value>
    <Label>{stat.label.split(' ').slice(0, 4).join(' ')}</Label>
  </StatWrap>
);

export default Stat;
