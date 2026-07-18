import ExperienceContainer from '../../components/ExperienceContainer';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

export default function Experience() {
  const { ref } = useTrackActiveSection('experience');

  return (
    <section ref={ref} id='id_experience' className='page-section flex justify-center bg-app'>
      <div className='content-shell flex flex-col items-center gap-10 pb-16 pt-4 min-[790px]:pb-20 min-[790px]:pt-6'>
        <div className='flex max-w-[720px] flex-col items-center gap-3 text-center'>
          <h1
            id='id_title_experience'
            className='w-fit text-section-title font-medium tracking-[-0.03em] text-copy-strong'
          >
            Experiências
          </h1>
          <p className='text-balance text-[0.98rem] leading-relaxed text-copy-muted min-[790px]:text-[1.05rem]'>
            Vivências acadêmicas e profissionais em que atuei com desenvolvimento, liderança de projeto e construção de soluções reais.
          </p>
        </div>
        <ExperienceContainer/>
      </div>
    </section>
  );
}
