import { useEffect, useState } from 'react';
import type { FC } from 'react';
import styles from './Scanner.module.scss';

const Scanner: FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className={styles.scanner} aria-hidden="true">
      <div className={styles.label}>Voltage Scan</div>
      <div className={styles.track}>
        <div className={styles.fill} style={{ height: `${progress}%` }} />
      </div>
      <div className={styles.pct}>{Math.round(progress)}%</div>
    </aside>
  );
};

export default Scanner;
