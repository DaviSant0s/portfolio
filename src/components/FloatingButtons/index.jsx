import { useHeader } from '../../context/HeaderContext';

export default function FloatingButtons() {
  const { activeSection } = useHeader();

  if (activeSection === 'home') {
    return null;
  }

  return (
    <div className='fixed top-1/2 right-4 z-[999999999] hidden h-fit w-fit -translate-y-1/2 flex-col gap-[15px] rounded-2xl border border-outline bg-panel px-2 py-4 shadow-[0px_6px_9px_0px_var(--color-shadow-soft)] min-[1361px]:flex 2xl:right-6'>
      <a
        href="https://www.linkedin.com/in/davisantoss/"
        target='_blank'
        rel='noreferrer'
        aria-label='Abrir LinkedIn de Davi Santos'
        className='inline-flex'
      >
        <i className='bx bxl-linkedin text-[2rem] text-social-linkedin transition-transform duration-200 ease-in-out hover:scale-110' />
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=53999322366&text=Ol%C3%A1%2C%20tudo%20bem%20?"
        target='_blank'
        rel='noreferrer'
        aria-label='Abrir conversa no WhatsApp'
        className='inline-flex'
      >
        <i className='bx bxl-whatsapp text-[2rem] text-social-whatsapp transition-transform duration-200 ease-in-out hover:scale-110' />
      </a>
      <a
        href="https://github.com/DaviSant0s"
        target='_blank'
        rel='noreferrer'
        aria-label='Abrir GitHub de Davi Santos'
        className='inline-flex'
      >
        <i className='bx bxl-github text-[2rem] text-[var(--color-icon-contrast)] opacity-80 transition-transform duration-200 ease-in-out hover:scale-110' />
      </a>
    </div>
  )
}
