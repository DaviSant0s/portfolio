import { Link } from 'react-scroll';
import Carousel from '../../components/Carousel';
import FeaturedProject from '../../components/FeaturedProject';
import ScrollReveal from '../../components/ScrollReveal';
import SectionBackdrop from '../../components/SectionBackdrop';
import SectionIntro from '../../components/SectionIntro';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

export default function Projects() {
  const { ref } = useTrackActiveSection('projects');

  return (
    <section
      ref={ref}
      id='id_projects'
      aria-labelledby='id_title_projects'
      className='page-section relative flex scroll-mt-[calc(var(--heightHeaderScroll)+var(--noticeHeight)+18px)] justify-center overflow-hidden bg-app-alt'
    >
      <SectionBackdrop
        glowClassName='top-10 h-[24rem] bg-[radial-gradient(circle_at_center,rgba(251,84,78,0.1),transparent_68%),radial-gradient(circle_at_62%_34%,rgba(2,112,173,0.08),transparent_28%)]'
      />

      <div className='content-shell relative z-[1] flex flex-col items-center gap-8 py-4 min-[790px]:gap-10 min-[790px]:py-6'>
        <SectionIntro
          eyebrow='Projetos selecionados'
          title='Interfaces, produtos e estudos aplicados'
          titleId='id_title_projects'
          as='h2'
          description='Recortes do que venho construindo com foco em produtos aplicados, soluções fullstack e pesquisa acadêmica em IA.'
          titleClassName='max-w-[14ch] min-[790px]:max-w-[15ch]'
        />

        <div className='flex w-full max-w-[1020px] flex-col items-center gap-8 min-[790px]:gap-10'>
          <ScrollReveal className='w-full' amount={0.22} delay={0.05}>
            <FeaturedProject />
          </ScrollReveal>

          <ScrollReveal className='w-full' amount={0.2} delay={0.06}>
            <Carousel />
          </ScrollReveal>

          <ScrollReveal
            as='aside'
            aria-labelledby='id_title_projects_cta'
            className='relative w-full overflow-hidden rounded-[26px] border border-white/10 bg-[#121821] px-5 py-7 text-white shadow-[0_24px_50px_-32px_rgba(15,23,42,0.7)] min-[500px]:rounded-[30px] min-[500px]:px-8 min-[500px]:py-9 min-[790px]:px-10 min-[790px]:py-10'
            amount={0.22}
            delay={0.08}
          >
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(2,112,173,0.22),transparent_34%),radial-gradient(circle_at_88%_90%,rgba(251,84,78,0.18),transparent_32%)]' />
            <div className='pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.18)_0.7px,transparent_0.7px)] [background-size:22px_22px]' />

            <div className='relative z-[1] flex flex-col items-start justify-between gap-6 min-[790px]:flex-row min-[790px]:items-center min-[790px]:gap-10'>
              <div className='max-w-[40rem]'>
                <span className='text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/55'>
                  Próximo passo
                </span>
                <h3
                  id='id_title_projects_cta'
                  className='mt-3 max-w-[18ch] text-balance text-[clamp(1.55rem,5vw,2.35rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-white'
                >
                  Tem um projeto ou oportunidade em mente?
                </h3>
                <p className='mt-3 max-w-[36rem] text-[0.94rem] leading-relaxed text-white/68 min-[500px]:text-base'>
                  Se meu trabalho fizer sentido para o que você está construindo, podemos conversar sobre o contexto e os próximos passos.
                </p>
              </div>

              <Link
                to='id_contact'
                smooth={true}
                offset={-79}
                duration={700}
                href='/#contato'
                className='inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-[0.96rem] font-semibold tracking-[-0.02em] text-[#12161d] shadow-[0_16px_32px_-20px_rgba(0,0,0,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f4f7fa] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white'
              >
                <span>Entrar em contato</span>
                <span className='material-symbols-outlined text-[1.05rem] leading-none' aria-hidden='true'>
                  south_east
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
