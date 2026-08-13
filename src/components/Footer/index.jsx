import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
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
    hoverClassName: 'group-hover:text-[#171515]',
  },
  {
    href: 'https://api.whatsapp.com/send/?phone=53999322366&text=Ol%C3%A1%2C%20tudo%20bem%20?',
    label: 'Abrir conversa no WhatsApp',
    icon: 'bxl-whatsapp',
    hoverClassName: 'group-hover:text-social-whatsapp',
  },
];

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className='relative w-full overflow-hidden bg-[#121821]'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute inset-0 bg-[linear-gradient(180deg,#151d28_0%,#101620_100%)]' />
        <div className='absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.12)_0.75px,transparent_0.75px)] [background-size:24px_24px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.8),transparent_90%)]' />
        <div className='absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]' />
      </div>

      <div className='content-shell relative z-[1] flex min-h-[240px] flex-col items-center justify-center gap-4 py-10 min-[790px]:min-h-[300px] min-[790px]:py-12'>

        <div className='mb-2 flex gap-1.5'>
          {socialLinks.map((link) => (
            <a
              key={link.icon}
              href={link.href}
              target='_blank'
              rel='noreferrer'
              aria-label={link.label}
              className='group inline-flex rounded-full focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              <i
                className={`bx ${link.icon} rounded-full border border-white/10 bg-white/5 p-2.5 text-[2rem] text-white transition-all duration-300 ease-out group-hover:border-white/25 group-hover:bg-white ${link.hoverClassName}`}
                aria-hidden='true'
              />
            </a>
          ))}
        </div>

        <nav aria-label='Navegação do rodapé' className='flex flex-col items-center gap-3 text-center min-[641px]:flex-row min-[641px]:flex-wrap min-[641px]:justify-center min-[641px]:gap-[15px]'>
          {navigationSections.map((item) => {
            const className = 'text-[1.02rem] font-medium text-white/72 transition-colors duration-150 ease-in hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white';

            if (item.path || pathname !== '/') {
              return (
                <RouterLink
                  key={item.section}
                  to={item.path ?? `/#${item.hash}`}
                  className={className}
                >
                  {item.label}
                </RouterLink>
              );
            }

            return (
              <ScrollLink
                key={item.section}
                to={item.to}
                smooth={true}
                offset={item.offset}
                duration={item.duration ?? 700}
                href={`/#${item.hash}`}
                className={className}
              >
                {item.label}
              </ScrollLink>
            );
          })}
        </nav>

        <span className='mt-4 text-sm font-light text-white/45'>
          Criado por Davi Santos
        </span>
      </div>
    </footer>
  )
}
