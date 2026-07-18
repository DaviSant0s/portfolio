export default function ArrowSlide({ direction='right', func_handle, disabled=false }) {
  const icon = direction === 'left' ? 'chevron_left' : 'chevron_right';
  const label = direction === 'left'
    ? 'Ver projetos anteriores'
    : 'Ver proximos projetos';
  const buttonClassName = [
    'inline-flex size-9 items-center justify-center rounded-full border-[1.5px] border-primary bg-panel/96 text-[1.25rem] font-extralight leading-none text-primary shadow-[0_10px_24px_-18px_var(--color-shadow-lg)] backdrop-blur-sm transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft min-[500px]:size-10 min-[500px]:text-[1.45rem] min-[691px]:size-11 min-[691px]:border-2 min-[691px]:bg-panel min-[691px]:text-[1.8rem] min-[691px]:shadow-none',
    disabled
      ? 'cursor-not-allowed opacity-35'
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
