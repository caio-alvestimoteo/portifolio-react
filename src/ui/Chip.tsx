import type { FC, ReactNode } from 'react';

interface ChipProps {
  children: ReactNode;
}

const Chip: FC<ChipProps> = ({ children }) => {
  return <span className="tag-chip">{children}</span>;
};

export default Chip;
