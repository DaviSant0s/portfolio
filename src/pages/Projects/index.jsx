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
        </div>
      </div>
    </section>
  );
}
