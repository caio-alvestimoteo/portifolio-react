import styled from 'styled-components';
import { tokens } from '../../../tokens';
import { sectionBase, h2Base } from '../../shared.styles';

export const TimelineSection = styled.section`
  ${sectionBase}

  h2 {
    ${h2Base}
    margin-bottom: 8px;
  }
`;

export const Subtitle = styled.div`
  font-size: 11px;
  letter-spacing: 0.18em;
  color: ${tokens.muted};
  text-transform: uppercase;
  margin-bottom: 40px;
`;

export const Track = styled.div`
  position: relative;
  border-left: 2px solid ${tokens.ink};
  padding-left: 0;
`;

export const Entry = styled.article`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;
  padding: 32px 0 32px 40px;
  border-bottom: 1px dashed ${tokens.line};
  position: relative;
  transition: background 0.25s;

  &:hover { background: rgba(215, 38, 56, 0.04); }

  &::before {
    content: "";
    position: absolute;
    left: -8px;
    top: 48px;
    width: 14px;
    height: 14px;
    background: ${tokens.red};
    border: 2px solid ${tokens.ink};
    transition: background 0.25s, transform 0.25s;
  }

  &:hover::before {
    background: ${tokens.ink};
    transform: scale(1.4) rotate(45deg);
  }

  h3 {
    font-family: ${tokens.fontDisplay};
    font-size: 24px;
    margin: 0 0 4px;
    text-transform: uppercase;
    line-height: 1.1;
    transition: color 0.25s;
  }

  &:hover h3 { color: ${tokens.red}; }

  p {
    font-size: 14px;
    line-height: 1.7;
    color: rgba(10, 8, 8, 0.78);
    margin: 0 0 8px;
    max-width: 720px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const EntryMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const EntryYear = styled.div`
  font-family: ${tokens.fontDisplay};
  font-size: 56px;
  line-height: 1;
  color: ${tokens.red};
  transition: color 0.25s, transform 0.25s;
  transform-origin: left center;

  ${Entry}:hover & {
    color: ${tokens.ink};
    transform: scale(1.04);
  }

  @media (max-width: 900px) { font-size: 40px; }
`;

export const EntryCode = styled.div`
  font-size: 10px;
  letter-spacing: 0.2em;
  color: ${tokens.muted};
`;

export const EntryBadge = styled.div`
  display: inline-block;
  background: ${tokens.ink};
  color: ${tokens.bg};
  font-size: 9px;
  padding: 3px 8px;
  letter-spacing: 0.16em;
  align-self: flex-start;
  font-weight: 700;
  transition: background 0.25s;

  ${Entry}:hover & { background: ${tokens.red}; }
`;

export const EntryBody = styled.div`
  padding: 8px 0;
`;

export const EntryCompany = styled.div`
  font-size: 11px;
  letter-spacing: 0.14em;
  color: ${tokens.muted};
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const EntryPeriod = styled.div`
  font-size: 10px;
  color: ${tokens.cyan};
  letter-spacing: 0.14em;
  margin-top: 8px;
`;
