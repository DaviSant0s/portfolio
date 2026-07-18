import * as Dialog from '@radix-ui/react-dialog';
import { useMediaQuery } from 'react-responsive'
import photo from '../../assets/img-perfil.jpeg'

export default function Logo({ sideBar=false }) {

  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1100px)'});
  const menuButtonClassName = [
    'flex size-11 shrink-0 items-center justify-center rounded-full border p-0 text-[2rem] text-copy transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft',
    sideBar
      ? 'border-outline bg-panel-soft shadow-[0_1px_2px_var(--color-shadow-soft)] hover:border-primary-soft hover:bg-primary-surface-strong'
      : 'border-transparent bg-transparent hover:bg-panel-strong hover:text-primary',
  ].join(' ');
  const logoContainerClassName = [
    'flex min-w-0 select-none items-center gap-[15px]',
    sideBar ? 'w-full gap-[14px]' : 'gap-3 min-[1200px]:gap-[15px]',
  ].join(' ');
  const titleClassName = [
    'font-brand tracking-[-0.03em] text-primary',
    sideBar ? 'text-[clamp(1.9rem,7vw,2.4rem)] leading-[0.95]' : 'text-[clamp(1.8rem,2.2vw,2rem)] leading-none',
  ].join(' ');
  const subtitleClassName = [
    sideBar ? 'mt-0.5 text-base text-copy-muted' : 'text-[0.9rem] text-copy',
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
              <span className="material-symbols-outlined">menu</span>
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
              <span className="material-symbols-outlined">close</span>
            </button>
          </Dialog.Close>
        }

        {!isTabletOrMobile && 
          <div className='size-10 overflow-hidden rounded-full border border-outline'>
            <img className='h-full w-full object-cover' src={photo} alt="Foto de perfil de Davi Santos"/>
          </div>
        }

      <div className='flex min-w-0 flex-col justify-center'>
        <h1 className={titleClassName}>Portfólio</h1>
        <span className={subtitleClassName}>Davi Santos</span>
      </div>
    </div>
  )
}
