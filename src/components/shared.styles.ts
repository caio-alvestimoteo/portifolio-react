import styled, { createGlobalStyle, css } from 'styled-components';
import { tokens } from '../tokens';

export { tokens };

export const sectionBase = css`
  position: relative;
  z-index: 5;
  overflow: hidden;
  padding: 120px 8vw;
`;

export const h2Base = css`
  font-family: ${tokens.fontDisplay};
  font-size: clamp(70px, 9vw, 160px);
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

  @media (max-width: 650px) {
    font-size: clamp(35px, 4.5vw, 80px);
  }
`;

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    font-family: ${tokens.fontMono};
    background: ${tokens.bg};
    color: ${tokens.ink};
    overflow-x: hidden;
  }

  body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    background-image:
      linear-gradient(rgba(10, 8, 8, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(10, 8, 8, 0.04) 1px, transparent 1px);
    background-size: 36px 36px;
  }

  body::after {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    background: repeating-linear-gradient(45deg, transparent 0 14px, rgba(215, 38, 56, 0.025) 14px 16px);
    mix-blend-mode: multiply;
  }

  a { color: inherit; text-decoration: none; }

  .reveal {
    opacity: 0;
    transform: translateX(-40px);
    transition:
      opacity 0.7s cubic-bezier(.2, .7, .2, 1),
      transform 0.7s cubic-bezier(.2, .7, .2, 1);
    will-change: opacity, transform;
    transition-delay: calc(var(--i, 0) * 60ms);
  }
  .reveal--from-right { transform: translateX(40px); }
  .reveal--from-bottom { transform: translateY(40px); }
  .reveal--from-up { transform: translateY(-30px); }
  .reveal--in { opacity: 1; transform: translate(0, 0); }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const SectionInner = styled.div`
  width: 100%;
  max-width: 1750px;
  margin-inline: auto;
`;

export const SectionH2 = styled.h2`
  ${h2Base}
`;

export const Eyebrow = styled.div<{ $dark?: boolean }>`
  font-family: ${tokens.fontMono};
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ $dark }) => ($dark ? tokens.cyan : tokens.red)};
  margin-bottom: 14px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: default;

  &::before {
    content: "";
    width: 24px;
    height: 2px;
    background: ${({ $dark }) => ($dark ? tokens.cyan : tokens.red)};
    display: inline-block;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 48px;
  }
`;
