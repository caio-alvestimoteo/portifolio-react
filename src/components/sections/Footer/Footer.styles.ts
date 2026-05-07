import styled from 'styled-components';
import { tokens } from '../../../tokens';
import { sectionBase } from '../../shared.styles';

export const FooterSection = styled.section.withConfig({ componentId: 'footer-section' })`
  ${sectionBase}
  padding: 100px 8vw;
  background: ${tokens.red};
  color: ${tokens.bg};
`;

export const FooterTitle = styled.div.withConfig({ componentId: 'footer__title' })`
  font-family: ${tokens.fontDisplay};
  font-size: clamp(72px, 9vw, 144px);
  line-height: 0.88;
  text-transform: uppercase;
  letter-spacing: -0.02em;
`;

export const FooterPara = styled.p.withConfig({ componentId: 'footer__para' })`
  font-size: 15px;
  line-height: 1.65;
  margin: 24px 0;
  color: rgba(239, 234, 224, 0.92);
  max-width: 560px;
`;

export const Contacts = styled.div.withConfig({ componentId: 'footer__contacts' })`
  border-top: 2px solid ${tokens.bg};
  padding-top: 20px;
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const ContactValue = styled.strong.withConfig({ componentId: 'footer__contact-value' })`
  color: ${tokens.bg};
  font-size: 13px;
  letter-spacing: 0.1em;
  transition: color 0.25s;
`;

export const ContactItem = styled.div.withConfig({ componentId: 'footer__contact-item' })`
  transition: transform 0.2s;
  cursor: default;

  &:hover { transform: translateY(-3px); }
  &:hover ${ContactValue} { color: ${tokens.yellow}; }
`;

export const ContactLabel = styled.div.withConfig({ componentId: 'footer__contact-label' })`
  color: rgba(239, 234, 224, 0.7);
  margin-bottom: 4px;
  font-size: 9px;
`;
