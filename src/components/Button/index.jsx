export default function Button({
  name,
  icon,
  handleClick,
  iconClassName = '',
  as = 'button',
  type = 'button',
  className = '',
}) {
  const Component = as;
  const isNativeButton = Component === 'button';
  const buttonClassName = [
    'bg-neutral-gradient group/button inline-flex h-[41px] w-max shrink-0 select-none items-center rounded-full border-2 border-outline px-5 no-underline appearance-none transition-all duration-150 ease-out hover:border-outline-strong focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft',
    className,
  ].join(' ').trim();

  return (
    <Component
      className={buttonClassName}
      {...(isNativeButton
        ? { type, onClick: handleClick }
        : {
            onClick: handleClick,
            role: handleClick ? 'button' : undefined,
          })}
    >
      <span className='flex h-full w-full items-center justify-center gap-[5px]'>
        <span
          className={`material-icons text-[1.35em] text-primary transition-colors group-hover/button:text-primary-strong ${iconClassName}`.trim()}
        >
          {icon}
        </span>
        <span className='leading-none'>{name}</span>
      </span>
    </Component>

  )
}
