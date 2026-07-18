import { Link } from 'react-scroll';
import { navigationSections } from '../../data/navigationSections';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/davisantoss/',
    label: 'Abrir LinkedIn de Davi Santos',
    icon: 'bxl-linkedin',
    hoverClassName: 'group-hover:text-social-linkedin',
  },
  {
    href: 'https://github.com/DaviSant0s',
    label: 'Abrir GitHub de Davi Santos',
    icon: 'bxl-github',
    hoverClassName: 'group-hover:text-copy-strong',
  },
  {
    href: 'https://api.whatsapp.com/send/?phone=53999322366&text=Ol%C3%A1%2C%20tudo%20bem%20?',
    label: 'Abrir conversa no WhatsApp',
    icon: 'bxl-whatsapp',
    hoverClassName: 'group-hover:text-social-whatsapp',
  },
];

export default function Footer() {
  return (
    <footer className='w-full bg-footer'>
      <div className='content-shell flex min-h-[300px] flex-col items-center justify-center gap-4 py-12'>

        <div className='mb-2 flex gap-1.5'>
          {socialLinks.map((link) => (
            <a
              key={link.icon}
              href={link.href}
              target='_blank'
              rel='noreferrer'
              aria-label={link.label}
              className='group inline-flex'
            >
              <i
                className={`bx ${link.icon} bg-footer-icon rounded-full border border-transparent p-2.5 text-[2rem] text-copy-inverse transition-all duration-300 ease-out group-hover:border-outline-strong group-hover:bg-panel ${link.hoverClassName}`}
              />
            </a>
          ))}
        </div>

        <nav className='flex flex-col items-center gap-3 text-center min-[641px]:flex-row min-[641px]:flex-wrap min-[641px]:justify-center min-[641px]:gap-[15px]'>
          {navigationSections.map((item) => (
            <Link
              key={item.section}
              to={item.to}
              smooth={true}
              offset={item.offset}
              duration={item.duration ?? 700}
              className='text-[1.05rem] font-medium transition-colors duration-150 ease-in hover:text-primary'
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <span className='mt-4 text-sm font-light text-copy-muted'>
          Criado por Davi Santos
        </span>
      </div>
    </footer>
  )
}
