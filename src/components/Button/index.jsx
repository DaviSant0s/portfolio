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
    'group/button inline-flex h-11 w-max shrink-0 select-none items-center rounded-full border border-outline/70 bg-panel/82 px-5 no-underline shadow-[0_18px_34px_-26px_var(--color-shadow-md)] backdrop-blur-sm appearance-none transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-copy-soft hover:bg-panel focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft',
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
          className={`material-icons text-[1.28em] text-copy-strong transition-colors group-hover/button:text-primary ${iconClassName}`.trim()}
          aria-hidden='true'
        >
          {icon}
        </span>
        <span className='text-[0.94rem] font-semibold leading-none tracking-[-0.02em] text-copy-strong'>
          {name}
        </span>
      </span>
    </Component>

  )
}
