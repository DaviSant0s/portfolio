import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import './styles.css';
import NavHeaderSideBar from '../NavHeaderSideBar';
import Logo from '../Logo';
import { useSideBar } from '../../context/SideBarContext';

export default function SideBar() {
  const { menuEnabled } = useSideBar();
  const prefersReducedMotion = useReducedMotion();
  const overlayTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.18, ease: 'easeOut' };
  const contentTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring', stiffness: 360, damping: 34 };

  return (
    <AnimatePresence>
      {menuEnabled &&
        <Dialog.Portal forceMount>
          <Dialog.Overlay forceMount asChild>
            <m.div
              className='background-sidebar'
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={overlayTransition}
            />
          </Dialog.Overlay>
          <Dialog.Content forceMount asChild>
            <m.div
              className='sideBar-container'
              initial={prefersReducedMotion ? false : { x: '-100%', opacity: 0.98 }}
              animate={{ x: 0, opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { x: '-100%', opacity: 0.98 }}
              transition={contentTransition}
            >
              <Dialog.Title className='sideBar-sr-only'>Menu de navegacao</Dialog.Title>
              <Dialog.Description className='sideBar-sr-only'>
                Use este painel para navegar pelas secoes do portfolio.
              </Dialog.Description>
              <div className='title-sideBar'>
                <Logo sideBar={true}/>
              </div>
              <NavHeaderSideBar/>
            </m.div>
          </Dialog.Content>
        </Dialog.Portal>
      }
    </AnimatePresence>
  )
}
