export default function SocialButton({ type, btn_style={} }) {
  const buttonConfig = {
    github: {
      href: 'https://github.com/DaviSant0s',
      label: 'GitHub',
      icon: 'bxl-github',
      iconClassName: 'text-[1.5rem] text-copy-strong/80 transition-opacity group-hover/social-btn:text-copy-strong group-hover/social-btn:opacity-100',
      iconWrapperClassName: '',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/davisantoss/',
      label: 'LinkedIn',
      icon: 'bxl-linkedin',
      iconClassName: 'text-[0.9rem] text-copy-inverse',
      iconWrapperClassName: 'flex size-5 items-center justify-center rounded-full bg-social-linkedin-strong/80 transition-opacity group-hover/social-btn:opacity-100',
    },
  };
  const socialButton = buttonConfig[type];

  if (!socialButton) {
    return null;
  }

  const mergedStyle = {
    background: 'var(--color-neutral-gradient)',
    ...btn_style,
  };

  return (
    <a
      href={socialButton.href}
      target='_blank'
      rel='noreferrer'
      className='inline-flex no-underline'
      aria-label={`Abrir ${socialButton.label}`}
    >
      <div
        style={mergedStyle}
        className='group/social-btn inline-flex h-[41px] w-fit shrink-0 select-none items-center justify-center gap-[5px] rounded-full border-2 border-outline px-5 transition-all duration-150 ease-out hover:border-outline-strong'
      >
        {socialButton.iconWrapperClassName ? (
          <div className={socialButton.iconWrapperClassName}>
            <i className={`bx ${socialButton.icon} ${socialButton.iconClassName}`}></i>
          </div>
        ) : (
          <i className={`bx ${socialButton.icon} ${socialButton.iconClassName}`}></i>
        )}
        <span className='leading-none text-copy'>{socialButton.label}</span>
      </div>
    </a>
  );
}
