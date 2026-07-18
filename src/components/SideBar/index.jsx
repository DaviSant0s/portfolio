import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import NavHeaderSideBar from '../NavHeaderSideBar';
import Logo from '../Logo';
import DarkModeBtn from '../DarkModeBtn';
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
              className='fixed inset-x-0 bottom-0 top-[25px] z-[99999999999999999999999999999999999999] bg-[var(--color-overlay-strong)] backdrop-blur-[2px]'
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={overlayTransition}
            />
          </Dialog.Overlay>
          <Dialog.Content forceMount asChild>
            <m.div
              className='fixed left-0 top-[25px] z-[99999999999999999999999999999999999999] flex h-[calc(100dvh-25px)] w-[min(82vw,336px)] flex-col items-center overflow-y-auto rounded-r-[22px] border-r border-outline bg-panel pb-[18px] shadow-float outline-none max-[420px]:w-[min(86vw,320px)] max-[420px]:rounded-r-[20px]'
              initial={prefersReducedMotion ? false : { x: '-100%', opacity: 0.98 }}
              animate={{ x: 0, opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { x: '-100%', opacity: 0.98 }}
              transition={contentTransition}
            >
              <Dialog.Title className='sr-only'>Menu de navegacao</Dialog.Title>
              <Dialog.Description className='sr-only'>
                Use este painel para navegar pelas secoes do portfolio.
              </Dialog.Description>
              <div
                className='relative flex h-[var(--heightHeaderScroll)] w-full items-center justify-start border-b border-outline px-[14px] [background:var(--color-surface-gradient)]'
              >
                <Logo sideBar={true}/>
              </div>
              <NavHeaderSideBar/>
              <div className='mt-auto w-full px-[14px] pt-[18px]'>
                <div className='flex items-center justify-between gap-[14px] rounded-[18px] border border-outline bg-panel-soft px-4 py-[14px]'>
                  <div className='flex min-w-0 flex-col gap-0.5'>
                    <span className='text-[0.98rem] font-bold text-copy-strong'>Tema visual</span>
                    <span className='text-[0.82rem] leading-[1.35] text-copy-muted'>Alternar entre modo claro e escuro</span>
                  </div>
                  <DarkModeBtn/>
                </div>
              </div>
            </m.div>
          </Dialog.Content>
        </Dialog.Portal>
      }
    </AnimatePresence>
  )
}
