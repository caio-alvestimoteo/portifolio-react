import styled, { keyframes } from 'styled-components';
import { tokens } from '../../../tokens';
import { sectionBase } from '../../shared.styles';

const slide = keyframes`
  0% { left: -56px; }
  100% { left: 56px; }
`;

export const HeroSection = styled.section.withConfig({ componentId: 'hero-section' })`
  ${sectionBase}
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 8vw 80px;
`;

export const Topline = styled.div.withConfig({ componentId: 'hero__topline' })`
  position: absolute;
  top: 80px;
  left: 8vw;
  right: 8vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${tokens.ink};
  padding-bottom: 8px;
  font-size: 14px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`;

export const Layout = styled.div.withConfig({ componentId: 'hero__layout' })`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 48px;
  align-items: end;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h1.withConfig({ componentId: 'hero__title' })`
  font-family: ${tokens.fontDisplay};
  font-size: clamp(110px, 13vw, 253px);
  line-height: 0.84;
  margin: 0;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  cursor: default;
  transition: transform 0.4s cubic-bezier(.2, .7, .2, 1);

  &:hover { transform: translateX(-4px); }
  &:hover span { color: ${tokens.ink}; }

  @media (max-width: 1750px) { font-size: clamp(99px, 11.7vw, 228px); }
  @media (max-width: 650px) { font-size: clamp(67px, 11.7vw, 228px); }
`;

export const TitleAccent = styled.span.withConfig({ componentId: 'hero__title-accent' })`
  display: block;
  color: ${tokens.red};
  transition: color 0.3s;
`;

export const Role = styled.div.withConfig({ componentId: 'hero__role' })`
  font-size: 14px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin: 18px 0 24px;
  color: ${tokens.muted};

  strong { color: ${tokens.ink}; }
`;

export const Lead = styled.p.withConfig({ componentId: 'hero__lead' })`
  font-size: 18px;
  line-height: 1.7;
  max-width: 560px;
  margin: 0 0 24px;
  color: rgba(10, 8, 8, 0.78);

  strong { color: ${tokens.red}; }
`;

export const Chips = styled.div.withConfig({ componentId: 'hero__chips' })`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Card = styled.div.withConfig({ componentId: 'hero__card' })`
  border: 2px solid ${tokens.ink};
  background: ${tokens.bg2};
  padding: 20px;
  position: relative;
  transition: transform 0.35s cubic-bezier(.2, .7, .2, 1), box-shadow 0.35s cubic-bezier(.2, .7, .2, 1);

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 6px 6px 0 ${tokens.red};
  }
`;

export const CardLabel = styled.div.withConfig({ componentId: 'hero__card-label' })`
  position: absolute;
  top: -2px;
  left: -2px;
  background: ${tokens.ink};
  color: ${tokens.bg};
  padding: 4px 10px;
  font-size: 14px;
  letter-spacing: 0.18em;
`;

export const CardJp = styled.div.withConfig({ componentId: 'hero__card-jp' })`
  font-family: ${tokens.fontJp};
  font-size: clamp(55px, 6vw, 92px);
  font-weight: 900;
  color: ${tokens.red};
  line-height: 0.9;
  margin: 24px 0 8px;
  text-align: right;
`;

export const CardJpSub = styled.div.withConfig({ componentId: 'hero__card-jp-sub' })`
  font-size: 14px;
  color: ${tokens.muted};
  letter-spacing: 0.2em;
  text-align: right;
  text-transform: uppercase;
`;

export const CardStats = styled.div.withConfig({ componentId: 'hero__card-stats' })`
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  border-top: 2px solid ${tokens.ink};
  padding-top: 14px;
`;

export const ScrollHint = styled.div.withConfig({ componentId: 'hero__scroll-hint' })`
  position: absolute;
  bottom: 32px;
  left: 8vw;
  font-size: 14px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${tokens.muted};
`;

export const ScrollLine = styled.span.withConfig({ componentId: 'hero__scroll-line' })`
  display: inline-block;
  width: 56px;
  height: 2px;
  background: ${tokens.ink};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: -56px;
    top: 0;
    width: 56px;
    height: 2px;
    background: ${tokens.red};
    animation: ${slide} 2s ease-in-out infinite;
  }
`;
