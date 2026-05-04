import type { FC } from 'react';
import type { Metric as MetricType } from '../types';
import styles from './Metric.module.scss';

interface MetricProps {
  metric: MetricType;
}

const Metric: FC<MetricProps> = ({ metric }) => {
  return (
    <div className={styles.metric}>
      <span>{metric.label}</span>
      <strong>{metric.value}</strong>
    </div>
  );
};

export default Metric;
