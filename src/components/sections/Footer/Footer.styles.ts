import styled from 'styled-components';
import { tokens } from '../../../tokens';
import { sectionBase } from '../../shared.styles';

export const FooterSection = styled.section`
  ${sectionBase}
  padding: 100px 8vw;
  background: ${tokens.red};
  color: ${tokens.bg};
`;

export const FooterTitle = styled.div`
  font-family: ${tokens.fontDisplay};
  font-size: clamp(72px, 9vw, 144px);
  line-height: 0.88;
  text-transform: uppercase;
  letter-spacing: -0.02em;
`;

export const FooterPara = styled.p`
  font-size: 15px;
  line-height: 1.65;
  margin: 24px 0;
  color: rgba(239, 234, 224, 0.92);
  max-width: 560px;
`;

export const Contacts = styled.div`
  border-top: 2px solid ${tokens.bg};
  padding-top: 20px;
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const ContactValue = styled.strong`
  color: ${tokens.bg};
  font-size: 13px;
  letter-spacing: 0.1em;
  transition: color 0.25s;
`;

export const ContactItem = styled.div`
  transition: transform 0.2s;
  cursor: default;

  &:hover { transform: translateY(-3px); }
  &:hover ${ContactValue} { color: ${tokens.yellow}; }
`;

export const ContactLabel = styled.div`
  color: rgba(239, 234, 224, 0.7);
  margin-bottom: 4px;
  font-size: 9px;
`;
