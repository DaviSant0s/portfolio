import * as Dialog from '@radix-ui/react-dialog';
import { useMediaQuery } from 'react-responsive'
import photo from '../../assets/img-perfil.jpeg'

export default function Logo({ sideBar=false }) {

  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1100px)'});
  const menuButtonClassName = [
    'flex size-10 shrink-0 items-center justify-center rounded-full border p-0 text-[1.9rem] text-copy transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft min-[500px]:size-11 min-[500px]:text-[2rem]',
    sideBar
      ? 'border-outline bg-panel-soft shadow-[0_1px_2px_var(--color-shadow-soft)] hover:border-primary-soft hover:bg-primary-surface-strong'
      : 'border-transparent bg-transparent hover:bg-panel-strong hover:text-primary',
  ].join(' ');
  const logoContainerClassName = [
    'flex min-w-0 select-none items-center gap-[15px]',
    sideBar ? 'w-full gap-3.5' : 'gap-2.5 min-[500px]:gap-3 min-[1200px]:gap-[15px]',
  ].join(' ');
  const titleClassName = [
    'font-brand tracking-[-0.03em] text-primary',
    sideBar ? 'text-[clamp(1.8rem,6vw,2.3rem)] leading-[0.95]' : 'text-[clamp(1.65rem,8vw,2rem)] leading-[0.95] min-[500px]:leading-none',
  ].join(' ');
  const subtitleClassName = [
    sideBar ? 'mt-0.5 text-[0.96rem] text-copy-muted min-[500px]:text-base' : 'text-[0.84rem] text-copy min-[500px]:text-[0.9rem]',
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
