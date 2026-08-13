import { AnimatePresence, useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import { useTheme } from '../../context/ThemeContext';

export default function DarkModeBtn() {
  const { isDarkMode, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const knobOffset = 30;
  const knobTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring', stiffness: 520, damping: 34 };
  const iconTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: 'easeOut' };

  return (
    <div className='flex h-fit w-fit items-center justify-center'>
      <m.button
        type='button'
        aria-label='Alternar tema visual'
        aria-pressed={isDarkMode}
        onClick={toggleTheme}
        className='bg-toggle-track relative flex h-[38px] w-[72px] items-center justify-start overflow-hidden rounded-full border border-[var(--color-toggle-track-border)] p-1 transition-all duration-200 ease-out [box-shadow:inset_0px_1px_6px_var(--color-toggle-track-shadow),0px_6px_14px_var(--color-shadow-soft)] hover:border-primary-soft hover:[box-shadow:inset_0px_1px_6px_var(--color-toggle-track-shadow),0px_8px_18px_var(--color-shadow-md)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft'
        whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
      >
        <span
          aria-hidden='true'
          className='pointer-events-none material-symbols-outlined absolute left-[10px] top-1/2 -translate-y-1/2 select-none text-[0.95rem] leading-none text-[var(--color-toggle-icon-sun)] opacity-[0.78]'
        >
          light_mode
        </span>
        <span
          aria-hidden='true'
          className='pointer-events-none material-symbols-outlined absolute right-[10px] top-1/2 -translate-y-1/2 select-none text-[0.95rem] leading-none text-[var(--color-toggle-icon-moon)] opacity-[0.78]'
        >
          dark_mode
        </span>
        <m.div
          className='relative z-[1] size-[30px] rounded-full border border-[var(--color-toggle-knob-border)] bg-toggle-surface [box-shadow:0px_6px_12px_var(--color-shadow-soft),inset_0px_1px_0px_var(--color-surface-glint)]'
          animate={{
            x: isDarkMode ? knobOffset : 0,
          }}
          transition={knobTransition}
        >
          <AnimatePresence mode='wait' initial={false}>
            <m.span
              key={isDarkMode ? 'dark' : 'light'}
              initial={prefersReducedMotion ? false : { rotate: -90, opacity: 0, scale: 0.6 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { rotate: 0, opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { rotate: 90, opacity: 0, scale: 0.6 }}
              transition={iconTransition}
              className={`material-symbols-outlined flex size-full select-none items-center justify-center rounded-full text-base ${isDarkMode ? 'text-[var(--color-toggle-icon-moon)]' : 'text-[var(--color-toggle-icon-sun)]'}`}
            >
              {isDarkMode ? 'dark_mode' : 'light_mode'}
            </m.span>
          </AnimatePresence>
        </m.div>
      </m.button>
    </div>
  )
}
