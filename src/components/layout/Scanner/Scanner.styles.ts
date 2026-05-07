import styled from 'styled-components';
import { tokens } from '../../../tokens';

export const Tracker = styled.div.withConfig({ componentId: 'scanner__tracker' })`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  z-index: 50;
  width: 100%;
`;

export const Fill = styled.div.withConfig({ componentId: 'scanner__fill' })`
  height: 100%;
  background: ${tokens.red};
  transition: width 0.05s linear;
`;
