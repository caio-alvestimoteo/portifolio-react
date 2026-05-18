import styled from 'styled-components';
import { tokens } from '../../../tokens';
import { sectionBase, h2Base } from '../../shared.styles';

export const ManifestSection = styled.section.withConfig({ componentId: 'manifest-section' })`
  ${sectionBase}
  background: ${tokens.ink};
  color: ${tokens.bg};

  h2 {
    ${h2Base}
    margin-bottom: 32px;

    em {
      font-style: normal;
      color: ${tokens.red};
    }
  }
`;

export const Grid = styled.div.withConfig({ componentId: 'manifest__grid' })`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 56px;
  align-items: start;

  p {
    font-size: 18px;
    line-height: 1.75;
    margin: 0 0 16px;
    color: rgba(239, 234, 224, 0.85);
    max-width: 640px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Radar = styled.div.withConfig({ componentId: 'manifest__radar' })`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 2px solid ${tokens.bg};
  padding-top: 20px;
`;

export const RadarTitle = styled.h4.withConfig({ componentId: 'manifest__radar-title' })`
  font-size: 14px;
  letter-spacing: 0.22em;
  color: ${tokens.yellow};
  margin: 0 0 8px;
  text-transform: uppercase;
  font-weight: 700;
`;
