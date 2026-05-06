import styled from 'styled-components';
import { tokens } from '../../../tokens';

export const BgWrap = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

export const Layer = styled.div`
  position: absolute;
  will-change: transform;
  font-family: ${tokens.fontDisplay};
  text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: 0.85;
  user-select: none;
  white-space: nowrap;
`;
