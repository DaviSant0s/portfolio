import { Link } from 'react-scroll';
import SocialsGroup from '../../components/SocialsGroup';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

export default function Home() {
  const { ref } = useTrackActiveSection('home');

  return (
    <div
      ref={ref}
      id='id_home'
      className='relative mt-[calc(var(--heightHeaderScroll)+var(--noticeHeight))] flex min-h-[calc(100vh-var(--heightHeaderScroll)-var(--noticeHeight))] justify-center bg-panel'
    >
      <div className='content-shell relative flex min-h-full w-full flex-1 flex-col items-center justify-center gap-6 pb-24 pt-10 text-center min-[790px]:pb-24 min-[790px]:pt-12'>
        <h1 className='select-none text-[clamp(2.188rem,8vw,3.125rem)] font-extrabold leading-none tracking-[-0.03em] text-copy-strong'>
          Desenvolvedor{' '}
          <span className='accent-text-gradient block min-[662px]:inline'>
            Fullstack
          </span>
        </h1>

        <p className='max-w-[1100px] text-balance text-[clamp(0.95rem,2.5vw,1.25rem)] leading-relaxed text-copy max-[790px]:max-w-[560px]'>
          Seja bem-vindo ao meu espaço virtual, onde compartilho minhas experiências, projetos e as mais recentes descobertas no mundo da tecnologia.
        </p>

        <SocialsGroup/>

        <Link
          to='id_certifications'
          smooth={true}
          offset={-79}
          aria-label='Ir para a seção de certificações'
          className='absolute bottom-7 animate-scroll-down'
        >
          <span className="material-symbols-outlined select-none text-[2.2rem] text-copy transition-colors duration-200 hover:text-primary">
            keyboard_arrow_down
          </span>
        </Link>
      </div>
    </div>
  )
}
