import type { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { tokens } from '../tokens';

const BadgeEl = styled.div`
  width: fit-content;
  border: 3px solid ${tokens.ink};
  background: #ffffff;
  padding: 7px 10px;
  box-shadow: 5px 5px 0 ${tokens.ink};
  color: ${tokens.ink};
`;

interface BadgeProps {
  children: ReactNode;
}

const Badge: FC<BadgeProps> = ({ children }) => <BadgeEl>{children}</BadgeEl>;

export default Badge;
