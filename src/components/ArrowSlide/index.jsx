export default function ArrowSlide({ direction='right', func_handle, disabled=false }) {
  const icon = direction === 'left' ? 'chevron_left' : 'chevron_right';
  const label = direction === 'left'
    ? 'Ver projetos anteriores'
    : 'Ver proximos projetos';
  const buttonClassName = [
    'inline-flex items-center justify-center rounded-full border-2 border-primary text-[1.8rem] font-extralight leading-none text-primary transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft',
    disabled
      ? 'cursor-not-allowed opacity-50'
      : 'hover:scale-110 hover:bg-primary hover:text-copy-inverse',
  ].join(' ');

  return (
    <button
      type="button"
      onClick={func_handle}
      aria-label={label}
      className={buttonClassName}
      disabled={disabled}
    >
      <span className="material-symbols-outlined text-inherit leading-none">{icon}</span>
    </button>
  )
}
