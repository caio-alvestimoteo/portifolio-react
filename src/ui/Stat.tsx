import type { FC } from 'react';
import type { Stat as StatType } from '../types';

interface StatProps {
  stat: StatType;
}

const Stat: FC<StatProps> = ({ stat }) => {
  return (
    <div className="hero-stat">
      <div className="hero-stat__value">{stat.value}</div>
      <div className="hero-stat__label">{stat.label.split(' ').slice(0, 4).join(' ')}</div>
    </div>
  );
};

export default Stat;
