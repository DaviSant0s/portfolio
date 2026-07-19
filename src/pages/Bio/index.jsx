import profileDark from '../../assets/profile/davi-profile-dark.png';
import profileLight from '../../assets/profile/davi-profile-light.jpg';
import ScrollReveal from '../../components/ScrollReveal';
import SectionBackdrop from '../../components/SectionBackdrop';
import { useTheme } from '../../context/ThemeContext';
import { bioHighlights, bioParagraphs, bioQuickFacts } from '../../data/bioSection';
import { resumeFileUrl } from '../../data/resumeFileUrl';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

export default function Bio() {
  const { ref } = useTrackActiveSection('bio');
  const { isDarkMode } = useTheme();
  const profileImage = isDarkMode ? profileDark : profileLight;

  return (
    <section
      ref={ref}
      id='id_bio'
      className='page-section relative flex scroll-mt-[calc(var(--heightHeaderScroll)+var(--noticeHeight)+18px)] justify-center overflow-hidden bg-app'
    >
      <SectionBackdrop
        glowClassName='top-8 h-[24rem] bg-[radial-gradient(circle_at_center,rgba(2,112,173,0.08),transparent_68%),radial-gradient(circle_at_68%_34%,rgba(251,84,78,0.08),transparent_28%)]'
        dotsClassName='opacity-26'
      />

      <div className='content-shell relative z-[1] flex flex-col gap-8 py-4 min-[790px]:gap-10 min-[790px]:py-6'>
        <div className='grid items-center gap-8 min-[790px]:gap-10 min-[960px]:grid-cols-[minmax(320px,380px)_minmax(0,1fr)] min-[960px]:gap-12'>
          <ScrollReveal className='mx-auto w-full max-w-[420px] min-[960px]:max-w-none' amount={0.18}>
            <div className='relative'>
              <div className='pointer-events-none absolute inset-x-8 inset-y-6 rounded-[34px] bg-[radial-gradient(circle_at_18%_16%,rgba(2,112,173,0.18),transparent_42%),radial-gradient(circle_at_82%_84%,rgba(251,84,78,0.16),transparent_38%)] blur-3xl opacity-80' />

              <div className='relative overflow-hidden rounded-[30px] border border-outline/70 bg-panel/78 p-2 shadow-[0_24px_54px_-34px_var(--color-shadow-lg)] backdrop-blur-sm'>
                <div className='overflow-hidden rounded-[24px] border border-outline/60 bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel-muted))]'>
                  <img
                    src={profileImage}
                    alt='Retrato de Davi Santos, desenvolvedor fullstack e estudante de Engenharia de Computação.'
                    loading='lazy'
                    decoding='async'
                    className='aspect-[4/5] h-full w-full object-cover object-center'
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className='flex flex-col items-start'>
            <ScrollReveal
              amount={0.32}
              className='inline-flex items-center gap-2 rounded-full border border-outline/70 bg-panel/82 px-3.5 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-copy-muted shadow-[0_14px_30px_-24px_var(--color-shadow-md)] backdrop-blur-sm min-[500px]:px-4 min-[500px]:py-2 min-[500px]:text-[0.78rem]'
            >
              <span className='size-2 rounded-full bg-[linear-gradient(135deg,var(--color-info),var(--color-primary))]' />
              <span>Sobre mim</span>
            </ScrollReveal>

            <ScrollReveal
              as='h2'
              delay={0.04}
              amount={0.26}
              className='mt-5 max-w-[11ch] text-balance text-[clamp(2rem,5vw,3.3rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-copy-strong min-[500px]:mt-7 min-[960px]:max-w-[12ch]'
            >
              Bio profissional e trajetória atual
            </ScrollReveal>

            <div className='mt-4 flex max-w-[42rem] flex-col gap-4 min-[790px]:mt-5'>
              {bioParagraphs.map((paragraph, index) => (
                <ScrollReveal
                  as='p'
                  key={paragraph}
                  delay={0.1 + (index * 0.05)}
                  amount={0.22}
                  className='text-[0.96rem] leading-[1.72] text-copy-muted min-[500px]:text-[1rem] min-[790px]:text-[1.04rem]'
                >
                  {paragraph}
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal
              as='dl'
              delay={0.22}
              amount={0.18}
              className='mt-6 grid w-full gap-3 min-[620px]:grid-cols-3'
            >
              {bioQuickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className='rounded-[22px] border border-outline/70 bg-panel/76 px-4 py-4 shadow-[0_18px_36px_-30px_var(--color-shadow-md)] backdrop-blur-sm'
                >
                  <div className='flex items-center gap-2.5'>
                    <span className='material-symbols-outlined text-[1.15rem] leading-none text-primary'>
                      {fact.icon}
                    </span>
                    <dt className='text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-copy-soft'>
                      {fact.label}
                    </dt>
                  </div>
                  <dd className='mt-3 text-[0.92rem] leading-[1.58] text-copy min-[500px]:text-[0.95rem]'>
                    {fact.value}
                  </dd>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal
              as='ul'
              delay={0.28}
              amount={0.18}
              className='mt-5 flex flex-wrap gap-2.5'
            >
              {bioHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className='inline-flex items-center rounded-full border border-outline/70 bg-panel/82 px-3.5 py-2 text-[0.84rem] font-medium text-copy-strong shadow-[0_12px_24px_-22px_var(--color-shadow-md)] backdrop-blur-sm min-[500px]:px-4'
                >
                  {highlight}
                </li>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={0.34} amount={0.2} className='mt-6'>
              <a
                href={resumeFileUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex h-11 items-center gap-2 rounded-full bg-[#15181d] px-5 text-[0.94rem] font-semibold tracking-[-0.02em] text-white shadow-[0_18px_34px_-24px_rgba(21,24,29,0.52)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#0f1115] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft dark:bg-white dark:text-[#12161d] dark:shadow-[0_18px_34px_-24px_rgba(0,0,0,0.34)] dark:hover:bg-[#f4f7fa]'
              >
                <span>Ver currículo</span>
                <span className='material-symbols-outlined text-[1.05rem] leading-none'>
                  south_east
                </span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
