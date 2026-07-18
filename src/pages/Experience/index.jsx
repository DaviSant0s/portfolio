import ExperienceContainer from '../../components/ExperienceContainer';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

export default function Experience() {
  const { ref } = useTrackActiveSection('experience');

  return (
    <section
      ref={ref}
      id='id_experience'
      className='page-section flex scroll-mt-[calc(var(--heightHeaderScroll)+var(--noticeHeight)+18px)] justify-center bg-app'
    >
      <div className='content-shell flex flex-col items-center gap-8 pb-14 pt-4 min-[790px]:gap-10 min-[790px]:pb-20 min-[790px]:pt-6'>
        <div className='flex max-w-[720px] flex-col items-center gap-3 text-center'>
          <h1
            id='id_title_experience'
            className='w-fit text-section-title font-medium tracking-[-0.03em] text-copy-strong'
          >
            Experiências
          </h1>
          <p className='max-w-[22rem] text-balance text-[0.95rem] leading-[1.58] text-copy-muted min-[500px]:max-w-[27rem] min-[790px]:max-w-none min-[790px]:text-[1.05rem] min-[790px]:leading-relaxed'>
            Projetos de extensão, residência, bolsas e experiências profissionais em que atuei com frontend, colaboração em equipe e construção de soluções reais.
          </p>
        </div>

        <ExperienceContainer />
      </div>
    </section>
  );
}
