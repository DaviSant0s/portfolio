// stacks
import css from '../../assets/css1.png';
import scss from '../../assets/scss.png';
import html from '../../assets/html1.png';
import react from '../../assets/react.png';
import linkedin from '../../assets/node2.png';
import javascript from '../../assets/javascript.png';


// frontend
import project1 from '../../assets/projects/curiosity_and_technology_screen.png'
import project2 from '../../assets/projects/resposividadescreen.png'
import project3 from '../../assets/projects/cordelscreen.png'
import project4 from '../../assets/projects/socialscreen.png'
import project5 from '../../assets/projects/mediascreen.png'
import project6 from '../../assets/projects/meusitescreen.png'
import project7 from '../../assets/projects/loginscreen.png'
import project8 from '../../assets/projects/siteCscreen.png'
import project10 from '../../assets/projects/finance.png'


// backend
import project9 from '../../assets/projects/github/projeto_login.png'

const dataFrontend = [
  {
    name: 'Finance',
    img: project10,
    stacks: [html, scss, javascript, react],
    link: '',
    github: 'https://github.com/DaviSant0s/Finance/tree/main',
  },
  {
    name: 'Projeto Android',
    img: project1,
    stacks: [css, html],
    link: 'https://davisant0s.github.io/projeto-android/',
    github: 'https://github.com/DaviSant0s/projeto-android',
  },
  {
    name: 'Tela responsiva',
    img: project2,
    stacks: [css, html],
    link: 'https://davisant0s.github.io/html-css/exercicios/ex026/mq002/',
    github: 'https://github.com/DaviSant0s/html-css/tree/main/exercicios/ex026/mq002',
  },
  {
    name: 'Cordel Moderno',
    img: project3,
    stacks: [css, html],
    link: 'https://davisant0s.github.io/projeto-cordel/',
    github: 'https://github.com/DaviSant0s/projeto-cordel',
  },
  {
    name: 'Projeto Social',
    img: project4,
    stacks: [css, html],
    link: 'https://davisant0s.github.io/projeto-social/',
    github: 'https://github.com/DaviSant0s/projeto-social',
  },
  {
    name: 'Testando Media Query',
    img: project5,
    stacks: [css, html],
    link: 'https://davisant0s.github.io/html-css/exercicios/ex026/mq004/',
    github: 'https://github.com/DaviSant0s/html-css/tree/main/exercicios/ex026/mq004',
  },
  {
    name: 'Meu Site',
    img: project6,
    stacks: [css, html],
    link: 'https://davisant0s.github.io/html-css/exercicios/ex026/mq005/',
    github: 'https://github.com/DaviSant0s/html-css/tree/main/exercicios/ex026/mq005',
  },
  {
    name: 'Login Responsivo',
    img: project7,
    stacks: [css, html],
    link: 'https://davisant0s.github.io/projeto-login/',
    github: 'https://github.com/DaviSant0s/projeto-login',
  },
]

const dataBackend = [
  {
    img: project9
  },
  {
    img: project9
  },
  {
    img: project9
  },
  {
    img: project9
  },
  
];

const dataFullstack = [
  
 
];

export default {dataFrontend, dataBackend, dataFullstack}