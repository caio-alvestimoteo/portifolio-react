import type { FC } from 'react';
import type { Metric as MetricType } from '../types';

interface MetricProps {
  metric: MetricType;
}

const Metric: FC<MetricProps> = ({ metric }) => {
  return (
    <div className="radar-item">
      <div className="radar-item__label">{metric.label}</div>
      <div className="radar-item__value">{metric.value}</div>
    </div>
  );
};

export default Metric;
