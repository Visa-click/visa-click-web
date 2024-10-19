import { Children, FC, ReactNode } from 'react';

type Props = {
  test: boolean;
  children: ReactNode | [view: ReactNode, fallback: ReactNode];
};

export const Condition: FC<Props> = ({ test, children }) => {
  const [view, fallback = null] = Children.toArray(children);

  return test ? <>{view}</> : fallback;
};
