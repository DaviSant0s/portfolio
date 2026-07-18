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
      <div className='content-shell relative flex min-h-full w-full flex-1 flex-col items-center justify-center gap-5 pb-20 pt-8 text-center min-[500px]:gap-6 min-[500px]:pb-24 min-[500px]:pt-10 min-[790px]:pt-12'>
        <h1 className='select-none text-[clamp(1.85rem,12vw,3.125rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-copy-strong min-[500px]:leading-none min-[500px]:tracking-[-0.03em]'>
          Desenvolvedor{' '}
          <span className='accent-text-gradient block min-[662px]:inline'>
            Fullstack
          </span>
        </h1>

        <p className='max-w-[21.5ch] text-balance text-[clamp(0.96rem,4.2vw,1.25rem)] leading-[1.55] text-copy min-[420px]:max-w-[24ch] min-[540px]:max-w-[29ch] min-[790px]:max-w-[1120px] min-[790px]:leading-relaxed'>
          Desenvolvedor full stack e estudante de Engenharia de Computação na FURG, com maior experiência prática em frontend usando React, JavaScript e TypeScript, além de atuação com Node.js, APIs REST e bancos de dados SQL e NoSQL.
        </p>

        <SocialsGroup />

        <Link
          to='id_certifications'
          smooth={true}
          offset={-79}
          aria-label='Ir para a seção de certificações'
          className='absolute bottom-7 animate-scroll-down'
        >
          <span className='material-symbols-outlined select-none text-[2.2rem] text-copy transition-colors duration-200 hover:text-primary'>
            keyboard_arrow_down
          </span>
        </Link>
      </div>
    </div>
  );
}
