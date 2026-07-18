export default function FloatingButtons() {
  return (
    <div className='fixed top-1/2 right-2 z-[999999999] flex h-fit w-fit -translate-y-1/2 flex-col gap-[15px] rounded-[15px] border border-outline bg-panel px-1 py-[15px] shadow-[0px_6px_9px_0px_var(--color-shadow-soft)]'>
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
