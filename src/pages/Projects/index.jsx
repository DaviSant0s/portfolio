import GitHubCalendar from 'react-github-calendar';
import './styles.css';

import Carousel from '../../components/Carousel';
import { useCarousel } from '../../context/CarrouselContext';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

export default function Projects() {
  const { widthCarrouselGlobal } = useCarousel();
  const currentYear = new Date().getFullYear();
  const { ref } = useTrackActiveSection('projects');

  return (
    <div ref={ref} id='id_projects' className='projects-container defaultPages'>
      <div className='projects-content'>
        <h1 id='id_title_projects'>Meus projetos</h1>
        <div style={{width: `${widthCarrouselGlobal}px`, gap: `${70*widthCarrouselGlobal/950}px`}}  className='carousel-and-githubCalendar-container'>
          <Carousel/>
          <div className='gitHubCalendar-container'>
            <GitHubCalendar username="DaviSant0s" year={currentYear} colorScheme='light'/>
          </div>
        </div>
      </div>
    </div>
  )
}
