export default function ArrowSlide({ direction='right', func_handle, disabled=false }) {
  const icon = direction === 'left' ? 'chevron_left' : 'chevron_right';
  const label = direction === 'left'
    ? 'Ver projetos anteriores'
    : 'Ver proximos projetos';
  const buttonClassName = [
    'inline-flex size-10 items-center justify-center rounded-full border border-outline/70 bg-panel/86 text-[1.2rem] font-extralight leading-none text-copy-strong shadow-[0_18px_32px_-24px_var(--color-shadow-md)] backdrop-blur-sm transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft min-[500px]:text-[1.35rem] min-[691px]:size-11 min-[691px]:text-[1.5rem]',
    disabled
      ? 'cursor-not-allowed opacity-35'
      : 'hover:-translate-y-0.5 hover:border-copy-soft hover:bg-panel',
  ].join(' ');

  return (
    <button
      type="button"
      onClick={func_handle}
      aria-label={label}
      className={buttonClassName}
      disabled={disabled}
    >
      <span className="material-symbols-outlined text-inherit leading-none" aria-hidden='true'>{icon}</span>
    </button>
  )
}
