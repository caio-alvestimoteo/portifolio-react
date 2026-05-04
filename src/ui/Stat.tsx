import type { FC } from 'react';
import type { Stat as StatType } from '../types';
import styles from './Stat.module.scss';

interface StatProps {
  stat: StatType;
}

const Stat: FC<StatProps> = ({ stat }) => {
  return (
    <div className={styles.stat}>
      <b>{stat.value}</b>
      <span>{stat.label}</span>
      <p dangerouslySetInnerHTML={{ __html: stat.description }} />
    </div>
  );
};

export default Stat;
