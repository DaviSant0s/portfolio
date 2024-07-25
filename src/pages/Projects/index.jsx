import GitHubCalendar from 'react-github-calendar';
import './styles.css';

import Carousel from '../../components/Carousel';

export default function Projects() {

  return (
    <div id='id_projects' className='projects-container defaultPages'>
      <h1 id='id_title_projects'>Meus projetos</h1>

      <Carousel/>

      <div className='gitHubCalendar-container'>
        <GitHubCalendar username="DaviSant0s" year={2024} colorScheme='light'/>
      </div>
    </div>
  )
}