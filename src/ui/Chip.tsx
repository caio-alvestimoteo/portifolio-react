import type { FC, ReactNode } from 'react';
import styles from './Chip.module.scss';

interface ChipProps {
  children: ReactNode;
}

const Chip: FC<ChipProps> = ({ children }) => {
  return <div className={styles.chip}>{children}</div>;
};

export default Chip;
