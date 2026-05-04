import type { FC } from 'react';
import styles from './Footer.module.scss';
import { footerCopy } from '../../data/portfolio';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div>
          <strong>{footerCopy.title}</strong>
          <p>{footerCopy.description}</p>
        </div>
        <div className={styles.badge}>{footerCopy.badge}</div>
      </div>
    </footer>
  );
};

export default Footer;
