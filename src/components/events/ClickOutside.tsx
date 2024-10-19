import { Fn } from '@bunt/type';
import { useOnClickOutside } from '@hooks/index';
import { cloneElement, FC, ReactElement, useEffect, useRef } from 'react';

type Props = {
  children: ReactElement;
  onClick: Fn;
  active?: boolean;
  onActivated?: Fn<[HTMLElement]>;
  onDeactivated?: Fn<[HTMLElement]>;
};

export const ClickOutside: FC<Props> = (props) => {
  const { children, onClick, onActivated, onDeactivated, active = true } = props;
  const ref = useRef<HTMLElement>(null);

  useOnClickOutside(ref, onClick, active);
  useEffect(() => {
    if (ref.current) {
      active ? onActivated?.(ref.current) : onDeactivated?.(ref.current);
    }
  }, [ref.current, active]);

  return cloneElement(children, { ref });
};
