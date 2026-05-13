import styled from 'styled-components';
import { tokens } from '../../../tokens';

export const Tracker = styled.div.withConfig({ componentId: 'scanner__tracker' })<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  z-index: 50;
  width: 100%;

  @media (min-width: 1024px) {
    ${({ $scrolled }) =>
      $scrolled &&
      `
      top: 50%;
      left: 8px;
      width: 3px;
      height: 42vh;
      display: flex;
      flex-direction: column;
      transform: translateY(-50%);
    `}
  }
`;

export const Fill = styled.div.withConfig({ componentId: 'scanner__fill' })<{
  $progress: number;
  $scrolled: boolean;
}>`
  height: 100%;
  width: ${({ $progress }) => `${$progress}%`};
  background: ${tokens.red};
  transition: width 0.05s linear, height 0.05s linear;

  @media (min-width: 1024px) {
    ${({ $scrolled, $progress }) =>
      $scrolled &&
      `
      width: 100%;
      height: ${$progress}%;
      margin-top: auto;
    `}
  }
`;
