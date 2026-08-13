import { useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import { useMemo } from 'react';

const motionComponents = {
  a: m.a,
  article: m.article,
  aside: m.aside,
  button: m.button,
  div: m.div,
  dl: m.dl,
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
  viewportMargin = '0px 0px -10% 0px',
  style,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motionComponents[as] ?? m.div;
  const mergedStyle = prefersReducedMotion
    ? style
    : { willChange: 'transform, opacity', ...style };

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
      <MotionTag className={className} style={mergedStyle} {...rest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      style={mergedStyle}
      variants={variants}
      initial='hidden'
      whileInView='visible'
      viewport={{
        amount,
        once,
        margin: viewportMargin,
      }}
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
