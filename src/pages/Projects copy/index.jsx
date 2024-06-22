import GitHubCalendar from 'react-github-calendar';
import './styles.css';

import Carousel from '../../components/Carousel';

export default function Projects() {

  return (
    <div id='id_projects' className='projects-container defaultPages'>
      <Carousel title={'Meus projetos'}/>
      {/* <div className='toggleCarousel-container'> */}
          {/* <CarouselChange/> */}

          {/* {toggleCarousel === 'frontend' &&
          <Carousel 
            projects={[
              {
                img: project1,
                stacks: [css, html],
                link: 'https://davisant0s.github.io/projeto-android/'

              },
              {
                img: project2,
                stacks: [css, html],
                link: 'https://davisant0s.github.io/html-css/exercicios/ex026/mq002/',
              },
              {
                img: project3,
                stacks: [css, html],
                link: 'https://davisant0s.github.io/projeto-cordel/',
              },
              {
                img: project4,
                stacks: [css, html],
                link: 'https://davisant0s.github.io/projeto-social/',
              },
              {
                img: project5,
                stacks: [css, html],
                link: 'https://davisant0s.github.io/html-css/exercicios/ex026/mq004/'
              },
              {
                img: project6,
                stacks: [css, html],
                link: 'https://davisant0s.github.io/html-css/exercicios/ex026/mq005/',
              },
              {
                img: project7,
                stacks: [css, html],
                link: 'https://davisant0s.github.io/projeto-login/',
              },
              {
                img: project8,
                stacks: [css, html],
                link: 'https://davisant0s.github.io/Clipboard-landing-page/'
              },
            ]}
          />

          }

          {toggleCarousel === 'backend' &&
          <Carousel
          projects={[
            {img: project9},
            {img: project9},
            {img: project9},
            {img: project9},
            {img: project9},
          ]}
          />
          }

          {toggleCarousel === 'fullstack' &&
          <Carousel/>
          } */}
          
      {/* </div> */}
    
      <div className='gitHubCalendar-container'>
        <GitHubCalendar username="DaviSant0s" year={2024} colorScheme='light'/>
      </div>
    </div>
  )
}