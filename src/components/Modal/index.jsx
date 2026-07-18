import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';

export default function Modal({ children, isOpen, setIsOpen }) {
  const prefersReducedMotion = useReducedMotion();
  const overlayTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.18, ease: 'easeOut' };
  const contentTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring', stiffness: 380, damping: 34 };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <AnimatePresence>
        {isOpen &&
          <Dialog.Portal forceMount>
            <Dialog.Overlay forceMount asChild>
              <m.div
                className='fixed inset-0 z-[99999999999999999999999999999999999999999999999] grid place-items-center overflow-y-auto bg-[var(--color-overlay)] px-4 pb-6 pt-[clamp(40px,8vh,84px)] backdrop-blur-[3px]'
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={overlayTransition}
              >
                <Dialog.Content forceMount asChild>
                  <m.div
                    className='h-min w-min max-w-[calc(100vw-32px)] outline-none'
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
                    transition={contentTransition}
                  >
                    {children}
                  </m.div>
                </Dialog.Content>
              </m.div>
            </Dialog.Overlay>
          </Dialog.Portal>
        }
      </AnimatePresence>
    </Dialog.Root>
  );
  
}
