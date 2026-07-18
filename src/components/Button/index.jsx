export default function Button({
  name,
  icon,
  handleClick,
  btn_style = {},
  icon_style = {},
  as = 'button',
  type = 'button',
  className = '',
}) {
  const Component = as;
  const isNativeButton = Component === 'button';
  const buttonClassName = [
    'group/button inline-flex h-[41px] w-max shrink-0 select-none items-center rounded-full border-2 border-outline px-5 no-underline appearance-none transition-all duration-150 ease-out hover:border-outline-strong focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft',
    className,
  ].join(' ').trim();
  const mergedStyles = {
    background: 'var(--color-neutral-gradient)',
    ...btn_style,
  };

  return (
    <Component
      className={buttonClassName}
      style={mergedStyles}
      {...(isNativeButton
        ? { type, onClick: handleClick }
        : {
            onClick: handleClick,
            role: handleClick ? 'button' : undefined,
          })}
    >
      <span className='flex h-full w-full items-center justify-center gap-[5px]'>
        <span
          style={icon_style}
          className="material-icons text-[1.35em] text-primary transition-colors group-hover/button:text-primary-strong"
        >
          {icon}
        </span>
        <span className='leading-none'>{name}</span>
      </span>
    </Component>

  )
}
