import type { FC } from 'react';
import { footerContacts, footerCopy } from '../../data/portfolio';

const Footer: FC = () => {
  return (
    <section className="footer red" id="footer" data-name="FIM">
      <div className="section-inner">
        <div className="footer__title reveal">
          FIM
          <br />
          DO ARQUIVO.
        </div>
        <p className="reveal" style={{ ['--i' as string]: 1 }}>
          {footerCopy.description}
        </p>
        <div className="footer__contacts reveal" style={{ ['--i' as string]: 2 }}>
          {footerContacts.map((item) => (
            <div key={item.label} className="footer__contact-item">
              <div className="footer__contact-label">{item.label.toUpperCase()}</div>
              <strong className="footer__contact-value">{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
