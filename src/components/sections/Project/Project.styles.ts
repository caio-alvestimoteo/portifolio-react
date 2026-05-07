import styled from 'styled-components';
import { tokens } from '../../../tokens';
import { sectionBase } from '../../shared.styles';

export const ProjectSection = styled.section.withConfig({ componentId: 'project-section' })`
  ${sectionBase}

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(45deg, transparent 0 12px, rgba(215, 38, 56, 0.06) 12px 14px);
    pointer-events: none;
    z-index: 0;
  }

  & > * { position: relative; z-index: 2; }

  h2 {
    font-family: ${tokens.fontDisplay};
    font-size: clamp(61.6px, 7.92vw, 140.8px);
    line-height: 0.85;
    margin: 0 0 24px;
    color: inherit;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    transition: transform 0.3s ease, letter-spacing 0.3s ease;
    cursor: default;
    display: inline-block;

    &:hover {
      transform: translateX(3px);
      letter-spacing: -0.015em;
    }
  }
`;

export const Layout = styled.div.withConfig({ componentId: 'project__layout' })`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Lead = styled.p.withConfig({ componentId: 'project__lead' })`
  font-size: 16px;
  line-height: 1.7;
  margin: 0 0 24px;
  color: rgba(10, 8, 8, 0.82);
  max-width: 600px;
`;

export const Quote = styled.blockquote.withConfig({ componentId: 'project__quote' })`
  border: 2px solid ${tokens.ink};
  background: ${tokens.yellow};
  padding: 18px 22px;
  margin: 0 0 24px;
  font-size: 14px;
  line-height: 1.65;
  color: ${tokens.ink};
  font-style: italic;
  max-width: 600px;
  transition: transform 0.25s, box-shadow 0.25s;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0 ${tokens.ink};
  }
`;

export const Tags = styled.div.withConfig({ componentId: 'project__tags' })`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Panel = styled.div.withConfig({ componentId: 'project__panel' })`
  border: 2px solid ${tokens.ink};
  padding: 18px;
  margin-bottom: 16px;
  background: ${tokens.bg2};
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  cursor: default;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 6px 6px 0 ${tokens.ink};
    background: ${tokens.bg};
  }

  label {
    font-size: 10px;
    letter-spacing: 0.14em;
    color: ${tokens.red};
    display: block;
    margin: 8px 0 4px;
    text-transform: uppercase;
    font-weight: 700;
  }

  p {
    font-size: 13px;
    line-height: 1.65;
    color: rgba(10, 8, 8, 0.75);
    margin: 0 0 8px;
  }
`;

export const PanelTitle = styled.strong.withConfig({ componentId: 'project__panel-title' })`
  font-family: ${tokens.fontDisplay};
  font-size: 18px;
  display: block;
  margin-bottom: 4px;
  text-transform: uppercase;
`;

export const PanelEyebrow = styled.div.withConfig({ componentId: 'project__panel-eyebrow' })`
  font-size: 10px;
  letter-spacing: 0.16em;
  color: ${tokens.cyan};
  margin-bottom: 12px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    width: 24px;
    height: 2px;
    background: ${tokens.cyan};
    display: inline-block;
  }
`;
