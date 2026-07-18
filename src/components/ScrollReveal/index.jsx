import { useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const motionComponents = {
  a: m.a,
  article: m.article,
  aside: m.aside,
  button: m.button,
  div: m.div,
  form: m.form,
  h1: m.h1,
  h2: m.h2,
  h3: m.h3,
  li: m.li,
  p: m.p,
  section: m.section,
  span: m.span,
  ul: m.ul,
};

function getHiddenState(direction, distance) {
  const state = {
    opacity: 0,
  };

  if (direction === 'left') {
    state.x = distance;
  } else if (direction === 'right') {
    state.x = -distance;
  } else if (direction === 'down') {
    state.y = -distance;
  } else {
    state.y = distance;
  }

  return state;
}

export default function ScrollReveal({
  as = 'div',
  children,
  className = '',
  delay = 0,
  duration = 0.62,
  distance = 26,
  direction = 'up',
  amount = 0.24,
  once = false,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: amount,
    triggerOnce: once,
    rootMargin: '0px 0px -10% 0px',
  });
  const MotionTag = motionComponents[as] ?? m.div;

  const variants = useMemo(() => ({
    hidden: getHiddenState(direction, distance),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }), [direction, distance]);

  if (prefersReducedMotion) {
    return (
      <MotionTag ref={ref} className={className} {...rest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={variants}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
