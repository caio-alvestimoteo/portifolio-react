import type { FC, ReactNode } from 'react';
import styles from './Badge.module.scss';

interface BadgeProps {
  children: ReactNode;
}

const Badge: FC<BadgeProps> = ({ children }) => {
  return <div className={styles.badge}>{children}</div>;
};

export default Badge;
