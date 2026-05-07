import styled from 'styled-components';
import { tokens } from '../../../tokens';

export const Tooltip = styled.span.withConfig({ componentId: 'social-dock__tooltip' })`
  position: absolute;
  right: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  background: ${tokens.ink};
  color: ${tokens.bg};
  padding: 4px 10px;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
  border: 1px solid ${tokens.ink};
`;

export const Link = styled.a.withConfig({ componentId: 'social-dock__link' })`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${tokens.bg};
  border: 2px solid ${tokens.ink};
  color: ${tokens.ink};
  position: relative;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  box-shadow: 4px 4px 0 ${tokens.ink};

  &:hover {
    background: ${tokens.red};
    color: ${tokens.bg};
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 ${tokens.ink};

    ${Tooltip} {
      opacity: 1;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }

  @media (max-width: 600px) {
    width: 44px;
    height: 44px;
    box-shadow: 3px 3px 0 ${tokens.ink};

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Dock = styled.nav.withConfig({ componentId: 'social-dock' })`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 45;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Logo = styled.span.withConfig({ componentId: 'social-dock__logo' })`
  font-family: ${tokens.fontDisplay};
  font-size: 26px;
  line-height: 1;
  letter-spacing: -0.05em;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;
