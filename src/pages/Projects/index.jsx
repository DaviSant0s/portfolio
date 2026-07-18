import { Suspense, lazy } from 'react';

import Carousel from '../../components/Carousel';
import { useTheme } from '../../context/ThemeContext';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

const GitHubCalendar = lazy(() => import('react-github-calendar'));

export default function Projects() {
  const currentYear = new Date().getFullYear();
  const { ref } = useTrackActiveSection('projects');
  const { isDarkMode } = useTheme();

  return (
    <section ref={ref} id='id_projects' className='page-section flex justify-center bg-app-alt'>
      <div className='content-shell flex flex-col items-center gap-10 py-4 min-[790px]:py-6'>
        <div className='flex max-w-[760px] flex-col items-center gap-4 text-center'>
          <h1
            id='id_title_projects'
            className='w-fit text-section-title font-medium tracking-[-0.03em] text-copy-strong'
          >
            Meus projetos
          </h1>
          <p className='text-balance text-[0.98rem] leading-relaxed text-copy-muted min-[790px]:text-[1.05rem]'>
            Aplicações, interfaces e experimentos que mostram minha evolução prática em frontend, backend e integração entre tecnologias.
          </p>
        </div>

        <div className='flex w-full max-w-[950px] flex-col items-center gap-14'>
          <Carousel/>
          <div className='w-full rounded-3xl border border-outline bg-panel px-3 py-4 shadow-panel min-[640px]:px-5 min-[640px]:py-5'>
            <div className='w-full overflow-x-auto overflow-y-hidden pb-1'>
              <div className='mx-auto min-w-[760px]'>
                <Suspense
                  fallback={
                    <div className='h-[128px] w-full animate-pulse rounded-[18px] bg-panel-muted/80' />
                  }
                >
                  <GitHubCalendar
                    username="DaviSant0s"
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
          </div>
        </div>
      </div>
    </section>
  )
}
