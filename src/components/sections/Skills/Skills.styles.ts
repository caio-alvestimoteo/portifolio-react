import styled from 'styled-components';
import { tokens } from '../../../tokens';
import { sectionBase, h2Base } from '../../shared.styles';

export const SkillsSection = styled.section.withConfig({ componentId: 'skills-section' })`
  ${sectionBase}

  h2 {
    ${h2Base}
    margin-bottom: 6px;
  }
`;

export const Subtitle = styled.div.withConfig({ componentId: 'skills__subtitle' })`
  font-size: 11px;
  letter-spacing: 0.2em;
  color: ${tokens.muted};
  text-transform: uppercase;
  margin-bottom: 32px;
`;

export const Tag = styled.span.withConfig({ componentId: 'skills__tag' })<{ $accent?: 'red' | 'cyan'; $featured?: boolean }>`
  font-size: 10px;
  padding: 4px 8px;
  border: 1px solid;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 600;
  cursor: default;
  transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease, transform 0.18s ease;

  background: ${({ $accent }) =>
    $accent === 'red' ? tokens.red : $accent === 'cyan' ? tokens.cyan : 'transparent'};
  border-color: ${({ $accent, $featured }) =>
    $accent === 'red' ? tokens.red : $accent === 'cyan' ? tokens.cyan : $featured ? tokens.bg : tokens.ink};
  color: ${({ $accent, $featured }) =>
    $accent ? tokens.bg : $featured ? tokens.bg : tokens.ink};

  &:hover {
    transform: translateY(-2px);
    background: ${({ $accent, $featured }) =>
      $accent ? tokens.ink : $featured ? tokens.yellow : tokens.red};
    border-color: ${({ $accent, $featured }) =>
      $accent ? tokens.ink : $featured ? tokens.yellow : tokens.red};
    color: ${({ $accent, $featured }) =>
      $accent ? tokens.bg : $featured ? tokens.ink : tokens.bg};
  }
`;

export const Group = styled.div.withConfig({ componentId: 'skills__group' })<{ $featured?: boolean }>`
  padding: 22px 24px;
  border-right: 2px solid ${tokens.ink};
  border-bottom: 2px solid ${tokens.ink};
  position: relative;
  transition: background 0.25s;
  background: ${({ $featured }) => ($featured ? tokens.ink : 'transparent')};
  color: ${({ $featured }) => ($featured ? tokens.bg : 'inherit')};

  &:nth-child(2n) { border-right: 0; }
  &:nth-last-child(-n + 2) { border-bottom: 0; }
  &:hover { background: ${({ $featured }) => ($featured ? '#1a1818' : tokens.bg2)}; }
`;

export const Grid = styled.div.withConfig({ componentId: 'skills__grid' })`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 2px solid ${tokens.ink};
  background: ${tokens.bg};

  @media (max-width: 800px) {
    grid-template-columns: 1fr;

    ${Group} {
      border-right: 0 !important;
      border-bottom: 2px solid ${tokens.ink} !important;
    }

    ${Group}:last-child {
      border-bottom: 0 !important;
    }
  }
`;

export const GroupNum = styled.div.withConfig({ componentId: 'skills__group-num' })<{ $featured?: boolean }>`
  position: absolute;
  top: 14px;
  right: 16px;
  font-family: ${tokens.fontDisplay};
  font-size: 14px;
  color: ${({ $featured }) => ($featured ? tokens.yellow : tokens.red)};
  letter-spacing: -0.02em;
`;

export const GroupTitle = styled.div.withConfig({ componentId: 'skills__group-title' })`
  font-family: ${tokens.fontDisplay};
  font-size: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 0 0 4px;
  line-height: 1.1;
`;

export const GroupSub = styled.div.withConfig({ componentId: 'skills__group-sub' })<{ $featured?: boolean }>`
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ $featured }) => ($featured ? 'rgba(239, 234, 224, 0.6)' : tokens.muted)};
  margin-bottom: 14px;
`;

export const GroupTags = styled.div.withConfig({ componentId: 'skills__group-tags' })`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
