import { FC, ReactNode } from 'react';

type Props = {
  size: number;
  children: [view: ReactNode, fallback: ReactNode];
};

export const ListView: FC<Props> = ({ size, children: [view, fallback] }) => {
  return size > 0 ? <>{view}</> : <>{fallback}</>;
};
