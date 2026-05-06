import type { FC } from 'react';
import { footerContacts, footerCopy } from '../../../data/portfolio';
import { SectionInner } from '../../shared.styles';
import { FooterSection, FooterTitle, FooterPara, Contacts, ContactItem, ContactLabel, ContactValue } from './Footer.styles';

const Footer: FC = () => {
  return (
    <FooterSection id="footer" data-name="FIM">
      <SectionInner>
        <FooterTitle className="reveal">
          FIM
          <br />
          DO ARQUIVO.
        </FooterTitle>
        <FooterPara className="reveal" style={{ ['--i' as string]: 1 }}>
          {footerCopy.description}
        </FooterPara>
        <Contacts className="reveal" style={{ ['--i' as string]: 2 }}>
          {footerContacts.map((item) => (
            <ContactItem key={item.label}>
              <ContactLabel>{item.label.toUpperCase()}</ContactLabel>
              <ContactValue>{item.value}</ContactValue>
            </ContactItem>
          ))}
        </Contacts>
      </SectionInner>
    </FooterSection>
  );
};

export default Footer;
