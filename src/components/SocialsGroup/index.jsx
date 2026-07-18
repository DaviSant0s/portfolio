import { Link } from 'react-scroll';

const socialLinks = [
  {
    type: 'external',
    href: 'https://www.linkedin.com/in/davisantoss/',
    label: 'Abrir LinkedIn de Davi Santos',
    icon: 'bxl-linkedin',
    hoverClassName: 'group-hover/social:text-social-linkedin',
  },
  {
    type: 'external',
    href: 'https://github.com/DaviSant0s',
    label: 'Abrir GitHub de Davi Santos',
    icon: 'bxl-github',
    hoverClassName: 'group-hover/social:text-copy-strong',
  },
  {
    type: 'external',
    href: 'https://api.whatsapp.com/send/?phone=53999322366&text=Ol%C3%A1%2C%20tudo%20bem%20?',
    label: 'Abrir conversa no WhatsApp',
    icon: 'bxl-whatsapp',
    hoverClassName: 'group-hover/social:text-social-whatsapp',
  },
  {
    type: 'scroll',
    to: 'id_contact',
    label: 'Ir para a seção de contato',
    icon: 'bxl-gmail',
    hoverClassName: 'group-hover/social:text-social-gmail',
  },
];

export default function SocialsGroup({ variant = 'default' }) {
  const isMinimal = variant === 'minimal';
  const itemClassName = isMinimal
    ? 'group/social inline-flex size-10 items-center justify-center rounded-full border border-outline/70 bg-panel/82 shadow-[0_12px_24px_-20px_var(--color-shadow-md)] backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-copy-soft hover:bg-panel focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft min-[500px]:size-11'
    : 'group/social inline-flex size-10 items-center justify-center rounded-full border border-transparent bg-transparent transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-outline hover:bg-panel hover:shadow-soft focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft min-[500px]:size-11';
  const iconBaseClassName = isMinimal
    ? 'bx text-[1.5rem] text-[var(--color-icon-default)] transition-colors duration-200 ease-out min-[500px]:text-[1.65rem]'
    : 'bx text-[1.85rem] text-[var(--color-icon-default)] transition-colors duration-200 ease-out min-[500px]:text-[2rem]';
  const containerClassName = isMinimal
    ? 'mt-4 flex w-full flex-wrap items-center justify-center gap-2.5 min-[500px]:mt-5 min-[500px]:w-fit min-[500px]:gap-3'
    : 'mt-1.5 flex w-full max-w-[18.75rem] items-center justify-between gap-2 rounded-full border border-outline bg-panel-muted/95 px-3 py-1.5 shadow-[0_14px_30px_-22px_var(--color-shadow-md)] backdrop-blur-sm transition-transform duration-300 ease-out hover:scale-[1.03] min-[500px]:mt-2.5 min-[500px]:w-fit min-[500px]:max-w-none min-[500px]:justify-around min-[500px]:gap-3 min-[500px]:px-4 min-[500px]:py-2';

  return (
    <div className={containerClassName}>
      {socialLinks.map((item) => {
        const iconClassName = `${iconBaseClassName} ${item.icon} ${item.hoverClassName}`;

        if (item.type === 'external') {
          return (
            <a
              key={item.icon}
              href={item.href}
              target='_blank'
              rel='noreferrer'
              aria-label={item.label}
              className={itemClassName}
            >
              <i className={iconClassName}/>
            </a>
          );
        }

        return (
          <Link
            key={item.icon}
            to={item.to}
            smooth={true}
            offset={-79}
            duration={700}
            aria-label={item.label}
            className={itemClassName}
          >
            <i className={iconClassName}/>
          </Link>
        );
      })}
    </div>
  )
}
