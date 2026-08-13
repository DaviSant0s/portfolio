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
              className='fixed inset-0 z-[99999999999999999999999999999999999999] bg-backdrop-strong backdrop-blur-[2px]'
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={overlayTransition}
            />
          </Dialog.Overlay>
          <Dialog.Content forceMount asChild>
            <m.div
              className='fixed left-0 top-0 z-[99999999999999999999999999999999999999] flex h-dvh w-[min(82vw,336px)] flex-col items-center overflow-y-auto rounded-r-[22px] border-r border-outline bg-panel pb-[18px] shadow-float outline-none max-[420px]:w-[min(84vw,312px)] max-[420px]:rounded-r-[20px]'
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
                className='bg-surface-gradient relative flex min-h-[88px] w-full shrink-0 items-center justify-start border-b border-outline px-4 py-4 min-[500px]:px-5'
              >
                <Logo sideBar={true}/>
              </div>
              <NavHeaderSideBar/>
              <div className='mt-auto w-full px-[14px] pt-[18px]'>
                <div className='flex items-center justify-between gap-3 rounded-[18px] border border-outline bg-panel-soft px-4 py-3.5'>
                  <div className='flex min-w-0 flex-col gap-0.5'>
                    <span className='text-[0.94rem] font-bold text-copy-strong min-[500px]:text-[0.98rem]'>Tema visual</span>
                    <span className='text-[0.78rem] leading-[1.35] text-copy-muted min-[500px]:text-[0.82rem]'>Alternar entre modo claro e escuro</span>
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
