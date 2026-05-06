import type { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { tokens } from '../tokens';

const ChipEl = styled.span`
  transition: background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;
  cursor: default;
  position: relative;
  font-size: 10px;
  padding: 8px 12px;
  border: 2px solid ${tokens.ink};
  background: transparent;
  text-transform: uppercase;
  letter-spacing: 0.06em;

  &:hover {
    background: ${tokens.red};
    color: ${tokens.bg};
    transform: translate(-2px, -2px);
    box-shadow: 3px 3px 0 ${tokens.ink};
  }
`;

interface ChipProps {
  children: ReactNode;
}

const Chip: FC<ChipProps> = ({ children }) => <ChipEl>{children}</ChipEl>;

export default Chip;
