import { AnimatePresence, useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import { useState } from 'react';
import './styles.css';

export default function DarkModeBtn({ styles_container={} }) {
  const [ darkMode, setDarkMode ] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const knobTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring', stiffness: 520, damping: 34 };
  const iconTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: 'easeOut' };

  return (
    <div style={styles_container} className='DarkModeBtn-container'>
      <m.button
        type='button'
        aria-label='Alternar tema visual'
        aria-pressed={darkMode}
        onClick={() => setDarkMode((state) => !state)}
        className='dark-mode-content'
        whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
      >
        <m.div
          className='circle-mode'
          animate={{
            x: darkMode ? 25 : 0,
            backgroundColor: darkMode ? '#434141' : '#ffffff',
            borderColor: darkMode ? '#434141' : '#e3e3e3be',
          }}
          transition={knobTransition}
        >
          <AnimatePresence mode='wait' initial={false}>
            <m.span
              key={darkMode ? 'dark' : 'light'}
              initial={prefersReducedMotion ? false : { rotate: -90, opacity: 0, scale: 0.6 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { rotate: 0, opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { rotate: 90, opacity: 0, scale: 0.6 }}
              transition={iconTransition}
              className={`material-icons mode ${darkMode ? 'darkMode' : 'lightMode'}`}
            >
              {darkMode ? 'dark_mode' : 'light_mode'}
            </m.span>
          </AnimatePresence>
        </m.div>
      </m.button>
    </div>
  )
}
