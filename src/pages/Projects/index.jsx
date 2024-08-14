import GitHubCalendar from 'react-github-calendar';
import './styles.css';

import Carousel from '../../components/Carousel';
import { useCarousel } from '../../context/CarrouselContext';

export default function Projects() {
  const { widthCarrouselGlobal } = useCarousel();

  return (
    <div id='id_projects' className='projects-container defaultPages'>
      <div className='projects-content'>
        <h1 id='id_title_projects'>Meus projetos</h1>
        <div style={{width: `${widthCarrouselGlobal}px`, gap: `${70*widthCarrouselGlobal/950}px`}}  className='carousel-and-githubCalendar-container'>
          <Carousel/>
          <div className='gitHubCalendar-container'>
            <GitHubCalendar username="DaviSant0s" year={2024} colorScheme='light'/>
          </div>
        </div>
      </div>
    </div>
  )
}