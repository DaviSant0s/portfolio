import ExperienceContainer from '../../components/ExperienceContainer';
import SectionBackdrop from '../../components/SectionBackdrop';
import SectionIntro from '../../components/SectionIntro';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

export default function Experience() {
  const { ref } = useTrackActiveSection('experience');

  return (
    <section
      ref={ref}
      id='id_experience'
      aria-labelledby='id_title_experience'
      className='page-section relative flex scroll-mt-[calc(var(--heightHeaderScroll)+var(--noticeHeight)+18px)] justify-center overflow-hidden bg-app'
    >
      <SectionBackdrop
        glowClassName='top-8 h-[22rem] bg-[radial-gradient(circle_at_center,rgba(251,84,78,0.09),transparent_68%)]'
        dotsClassName='opacity-25'
      />

      <div className='content-shell relative z-[1] flex flex-col items-center gap-8 pb-14 pt-4 min-[790px]:gap-10 min-[790px]:pb-20 min-[790px]:pt-6'>
        <SectionIntro
          eyebrow='Trajetória prática'
          title='Experiências que conectam estudo e entrega'
          titleId='id_title_experience'
          as='h2'
          description='Residência tecnológica, voluntariado, empresa júnior, ensino e pesquisa que sustentam minha atuação atual.'
          titleClassName='max-w-[13ch] min-[790px]:max-w-[14ch]'
        />
        <ExperienceContainer />
      </div>
    </section>
  );
}
