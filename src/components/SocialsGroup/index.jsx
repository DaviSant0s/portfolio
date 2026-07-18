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

export default function SocialsGroup() {
  const itemClassName = 'group/social inline-flex size-11 items-center justify-center rounded-full border border-transparent bg-transparent transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-outline hover:bg-panel hover:shadow-soft focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft';
  const iconBaseClassName = 'bx text-[2rem] text-[var(--color-icon-default)] transition-colors duration-200 ease-out';

  return (
    <div className='mt-2.5 flex w-fit items-center justify-around gap-3 rounded-full border border-outline bg-panel-muted/95 px-4 py-2 shadow-[0_14px_30px_-22px_var(--color-shadow-md)] backdrop-blur-sm transition-transform duration-300 ease-out hover:scale-[1.03]'>
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
