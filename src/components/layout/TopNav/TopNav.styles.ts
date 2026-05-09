import styled from 'styled-components';
import { tokens } from '../../../tokens';

export const Nav = styled.div.withConfig({ componentId: 'top-nav' })`
  position: fixed;
  top: 14px;
  left: 24px;
  right: 24px;
  z-index: 40;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  pointer-events: none;
  mix-blend-mode: difference;
  color: #fff;
`;

export const Brand = styled.div.withConfig({ componentId: 'top-nav__brand' })`
  display: flex;
  gap: 16px;
  align-items: center;

  strong {
    padding: 4px 10px;
    border: 1px solid currentColor;
  }
`;

export const Controls = styled.div.withConfig({ componentId: 'top-nav__controls' })`
  display: flex;
  gap: 8px;
  pointer-events: auto;
  mix-blend-mode: normal;
  color: ${tokens.ink};
`;

export const Dot = styled.button.withConfig({ componentId: 'top-nav__dot' })<{ $active: boolean }>`
  width: 36px;
  height: 14px;
  border: 2px solid ${({ $active }) => ($active ? tokens.red : tokens.ink)};
  background: ${({ $active }) => ($active ? tokens.red : 'rgba(239, 234, 224, 0.7)')};
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;

  ${({ $active }) => !$active && `&:hover { transform: scale(1.15); }`}
`;
