import { Transition, useAnimation, useInView, Variants } from 'framer-motion';
import React, { ReactElement } from 'react';

interface AnimatedContainerProps {
  variants: Variants;
  transition?: Transition;
  children: ReactElement<any, string | React.JSXElementConstructor<any>>;
  viewport?: number;
}

export const AnimatedContainer: React.FC<AnimatedContainerProps> = (props) => {
  const {
    variants,
    transition = { ease: 'easeIn', duration: 0.5 },
    children,
    viewport = 0.5,
  } = props;
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: viewport });
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start('visible');
      setHasAnimated(true);
    }
  }, [controls, isInView, hasAnimated]);

  return (
    <>
      {React.cloneElement(children, {
        ref,
        initial: 'hidden',
        animate: controls,
        variants,
        transition,
      })}
    </>
  );
};
