import Carousel from '../../components/Carousel';
import GitHubCalendar from 'react-github-calendar';
import './styles.css';

const themeConfig = {
  light: {
    background: '#f0f0f0',
    text: '#384259',
    grade4: '#FB6661',
    grade3: '#FB6661AA', 
    grade2: '#FB666166',
    grade1: '#FB666133',
    grade0: '#f0f0f0', 
  },
  dark: {
    background: '#383838',
    text: '#E96479',
    grade4: '#FB6661',
    grade3: '#FB6661AA', // Ajuste a opacidade para diferentes intensidades
    grade2: '#FB666166',
    grade1: '#FB666133',
    grade0: '#383838', // Cor de fundo padrão
  },
};

const explicitTheme = {
  light: ['#6b6b6b', '#FB666133', '#FB666166', '#FB6661AA', '#FB6661'],
  dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
};

export default function Projects() {
  return (
    <div id='id_projects' className='projects-container defaultPages'>
      <Carousel title={'Meus projetos'}/>
      <div className='gitHubCalendar-container'>
        <GitHubCalendar username="DaviSant0s" year={2024} colorScheme='light'/>
      </div>
    </div>
  )
}

