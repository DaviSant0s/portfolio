import GitHubCalendar from 'react-github-calendar';
import './styles.css';

import Carousel from '../../components/Carousel';
import { useTheme } from '../../context/ThemeContext';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

export default function Projects() {
  const currentYear = new Date().getFullYear();
  const { ref } = useTrackActiveSection('projects');
  const { isDarkMode } = useTheme();

  return (
    <div ref={ref} id='id_projects' className='projects-container defaultPages'>
      <div className='projects-content'>
        <h1 id='id_title_projects'>Meus projetos</h1>
        <div className='carousel-and-githubCalendar-container'>
          <Carousel/>
          <div className='gitHubCalendar-container'>
            <GitHubCalendar
              username="DaviSant0s"
              year={currentYear}
              colorScheme={isDarkMode ? 'dark' : 'light'}
              theme={{
                light: ['#ebedf0', '#ffd6d2', '#ff9b94', '#fb544e', '#d63c37'],
                dark: ['#1b2430', '#432b2a', '#7c3f3c', '#fb544e', '#ff9d97'],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
