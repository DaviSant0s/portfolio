import { Suspense, lazy } from 'react';
import Carousel from '../../components/Carousel';
import ScrollReveal from '../../components/ScrollReveal';
import SectionBackdrop from '../../components/SectionBackdrop';
import SectionIntro from '../../components/SectionIntro';
import { useTheme } from '../../context/ThemeContext';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

const GitHubCalendar = lazy(() => import('react-github-calendar'));

export default function Projects() {
  const currentYear = new Date().getFullYear();
  const { ref } = useTrackActiveSection('projects');
  const { isDarkMode } = useTheme();

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
          <ScrollReveal className='w-full' amount={0.2} delay={0.06}>
            <Carousel />
          </ScrollReveal>

          <ScrollReveal
            className='w-full rounded-[32px] border border-outline/70 bg-panel/76 px-4 py-4 shadow-[0_22px_46px_-32px_var(--color-shadow-md)] backdrop-blur-sm min-[500px]:px-5 min-[500px]:py-5 min-[640px]:px-6 min-[640px]:py-6'
            amount={0.24}
            delay={0.12}
          >
            <div className='mb-4 flex flex-col gap-2 min-[720px]:mb-5'>
              <span className='inline-flex w-fit items-center gap-2 rounded-full border border-outline/70 bg-panel/82 px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-copy-muted shadow-[0_14px_28px_-24px_var(--color-shadow-md)]'>
                <span className='size-2 rounded-full bg-[linear-gradient(135deg,var(--color-info),var(--color-primary))]' />
                Atividade no GitHub
              </span>
              <p className='max-w-[34rem] text-[0.92rem] leading-[1.6] text-copy-muted min-[500px]:text-[0.97rem]'>
                Um recorte do meu ritmo de estudo, prática e evolução recente no GitHub ao longo do ano.
              </p>
            </div>

            <div className='w-full overflow-x-auto overflow-y-hidden pb-1'>
              <div className='mx-auto min-w-[760px]'>
                <Suspense
                  fallback={
                    <div className='h-[128px] w-full animate-pulse rounded-[18px] bg-panel-muted/80' />
                  }
                >
                  <GitHubCalendar
                    username='DaviSant0s'
                    year={currentYear}
                    colorScheme={isDarkMode ? 'dark' : 'light'}
                    theme={{
                      light: ['#ebedf0', '#ffd6d2', '#ff9b94', '#fb544e', '#d63c37'],
                      dark: ['#1b2430', '#432b2a', '#7c3f3c', '#fb544e', '#ff9d97'],
                    }}
                  />
                </Suspense>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
