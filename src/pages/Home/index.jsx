import { Link } from 'react-scroll';
import AnimatedParticleBackground from '../../components/AnimatedParticleBackground';
import ScrollReveal from '../../components/ScrollReveal';
import SocialsGroup from '../../components/SocialsGroup';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

const resumeFileUrl = new URL('../../../curriculo_vitae_Davi_Santos.pdf', import.meta.url).href;

export default function Home() {
  const { ref } = useTrackActiveSection('home');
  const primaryCtaClassName = 'inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#15181d] px-6 text-[0.98rem] font-semibold tracking-[-0.02em] text-white shadow-[0_18px_34px_-24px_rgba(21,24,29,0.52)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#0f1115] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft dark:bg-white dark:text-[#12161d] dark:shadow-[0_18px_34px_-24px_rgba(0,0,0,0.34)] dark:hover:bg-[#f4f7fa]';
  const secondaryCtaClassName = 'inline-flex h-12 items-center justify-center rounded-full border border-outline/70 bg-panel/82 px-6 text-[0.98rem] font-semibold tracking-[-0.02em] text-copy-strong shadow-[0_18px_34px_-26px_var(--color-shadow-md)] backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-copy-soft hover:bg-panel focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft';

  return (
    <div
      ref={ref}
      id='id_home'
      className='relative mt-[calc(var(--heightHeaderScroll)+var(--noticeHeight))] flex min-h-[calc(100vh-var(--heightHeaderScroll)-var(--noticeHeight))] justify-center overflow-hidden bg-panel'
    >
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute inset-0 bg-[linear-gradient(180deg,var(--color-panel)_0%,var(--color-app-alt)_100%)]' />
        <div className='absolute inset-0 opacity-45 [background-image:radial-gradient(var(--color-border-muted)_0.8px,transparent_0.8px)] [background-size:24px_24px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.82),rgba(0,0,0,0.28))]' />
        <div className='absolute inset-y-0 left-0 w-[min(44vw,38rem)] bg-[radial-gradient(circle_at_20%_76%,rgba(251,84,78,0.12),transparent_36%),radial-gradient(circle_at_46%_24%,rgba(2,112,173,0.1),transparent_24%)]' />
        <AnimatedParticleBackground />
        <div className='absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-border),transparent)] opacity-70' />
      </div>

      <div className='content-shell relative z-[1] flex min-h-full w-full flex-1 flex-col items-center justify-center pb-14 pt-7 text-center min-[500px]:pb-20 min-[500px]:pt-10 min-[790px]:pb-28 min-[790px]:pt-16'>
        <ScrollReveal
          amount={0.4}
          className='inline-flex items-center gap-2 rounded-full border border-outline/70 bg-panel/82 px-3.5 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-copy-muted shadow-[0_14px_30px_-24px_var(--color-shadow-md)] backdrop-blur-sm min-[500px]:px-4 min-[500px]:py-2 min-[500px]:text-[0.78rem]'
        >
          <span className='size-2 rounded-full bg-[linear-gradient(135deg,var(--color-info),var(--color-primary))]' />
          <span>Davi Santos</span>
        </ScrollReveal>

        <ScrollReveal
          as='h1'
          delay={0.06}
          amount={0.34}
          className='mt-5 max-w-[10.2ch] select-none text-balance text-[clamp(2.05rem,9.8vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-copy-strong min-[500px]:mt-8 min-[500px]:max-w-[10.8ch] min-[500px]:text-[clamp(2.65rem,8.2vw,5.2rem)] min-[790px]:max-w-[13.2ch] min-[790px]:text-[clamp(3.45rem,6.8vw,5.2rem)]'
        >
          Construo experiências web com clareza, performance e propósito.
        </ScrollReveal>

        <ScrollReveal
          as='p'
          delay={0.12}
          amount={0.28}
          className='mt-4 max-w-[19rem] text-balance text-[clamp(0.92rem,3.55vw,1.18rem)] leading-[1.56] text-copy-muted min-[500px]:mt-6 min-[500px]:max-w-[30rem] min-[790px]:max-w-[46rem] min-[790px]:leading-[1.7]'
        >
          Desenvolvedor full stack e estudante de Engenharia de Computação na FURG, com atuação em React, TypeScript, Node.js, APIs REST e construção de produtos digitais mais consistentes.
        </ScrollReveal>

        <ScrollReveal
          delay={0.18}
          amount={0.3}
          className='mt-6 flex flex-wrap items-center justify-center gap-3 min-[500px]:mt-9'
        >
          <a
            href={resumeFileUrl}
            target='_blank'
            rel='noreferrer'
            className={primaryCtaClassName}
          >
            <span>Ver currículo</span>
            <span className='material-symbols-outlined text-[1.05rem] leading-none'>
              south_east
            </span>
          </a>

          <Link
            to='id_projects'
            smooth={true}
            offset={-79}
            duration={700}
            className={secondaryCtaClassName}
          >
            Explorar projetos
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.24} amount={0.28}>
          <SocialsGroup variant='minimal' />
        </ScrollReveal>
      </div>
    </div>
  );
}
