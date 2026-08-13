import * as Dialog from '@radix-ui/react-dialog';
import { useMediaQuery } from 'react-responsive'

export default function Logo({ sideBar=false }) {

  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1100px)'});
  const menuButtonClassName = [
    'flex size-10 shrink-0 items-center justify-center rounded-full border p-0 text-[1.9rem] text-copy transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft min-[500px]:size-11 min-[500px]:text-[2rem]',
    sideBar
      ? 'border-outline bg-panel-soft shadow-[0_1px_2px_var(--color-shadow-soft)] hover:border-primary-soft hover:bg-primary-surface-strong'
      : 'border-transparent bg-transparent hover:bg-panel-strong hover:text-primary',
  ].join(' ');
  const logoContainerClassName = [
    'flex min-w-0 select-none items-center',
    sideBar ? 'w-full justify-between gap-3.5' : 'justify-start',
  ].join(' ');
  const brandClassName = [
    'group/brand inline-flex shrink-0 items-center',
  ].join(' ');
  const wordmarkClassName = [
    'font-sans font-semibold tracking-[-0.05em] text-copy-strong transition-colors duration-200 ease-out group-hover/brand:text-copy-strong',
    sideBar
      ? 'text-[1.45rem] leading-none min-[500px]:text-[1.6rem]'
      : 'text-[1.08rem] leading-none min-[500px]:text-[1.14rem]',
  ].join(' ');
  

  return (
    <div className={logoContainerClassName}>
        {
          (isTabletOrMobile && !sideBar) && 
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label="Abrir menu de navegacao"
              className={menuButtonClassName}
            >
              <span className="material-symbols-outlined" aria-hidden='true'>menu</span>
            </button>
          </Dialog.Trigger>
        }

        {
          (isTabletOrMobile && sideBar) && 
          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Fechar menu de navegacao"
              className={menuButtonClassName}
            >
              <span className="material-symbols-outlined" aria-hidden='true'>close</span>
            </button>
          </Dialog.Close>
        }

      <div className={brandClassName}>
        <span className={wordmarkClassName}>
          ds<span className='text-primary'>.</span>dev
        </span>
      </div>
      <span className='sr-only'>Marca ds.dev</span>
    </div>
  )
}
