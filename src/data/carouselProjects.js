import css from '../assets/css1.png';
import scss from '../assets/scss.png';
import html from '../assets/html1.png';
import react from '../assets/react.png';
import javascript from '../assets/javascript.png';

import project1 from '../assets/projects/curiosity_and_technology_screen.png';
import project2 from '../assets/projects/resposividadescreen.png';
import project3 from '../assets/projects/cordelscreen.png';
import project4 from '../assets/projects/socialscreen.png';
import project5 from '../assets/projects/mediascreen.png';
import project6 from '../assets/projects/meusitescreen.png';
import project7 from '../assets/projects/loginscreen.png';
import project10 from '../assets/projects/finance.png';

import project9 from '../assets/projects/github/projeto_login.png';

const htmlStack = { icon: html, label: 'HTML' };
const cssStack = { icon: css, label: 'CSS' };
const scssStack = { icon: scss, label: 'Sass' };
const javascriptStack = { icon: javascript, label: 'JavaScript' };
const reactStack = { icon: react, label: 'React' };

export const carouselProjects = {
  frontend: [
    {
      name: 'Finance',
      summary: 'Plataforma financeira responsiva para organização e visualização de dados.',
      img: project10,
      imageClassName: 'object-center',
      stacks: [htmlStack, scssStack, javascriptStack, reactStack],
      link: '',
      github: 'https://github.com/DaviSant0s/Finance/tree/main',
    },
    {
      name: 'Projeto Android',
      summary: 'Landing page editorial sobre o universo Android com layout adaptativo.',
      img: project1,
      imageClassName: 'object-top',
      stacks: [cssStack, htmlStack],
      link: 'https://davisant0s.github.io/projeto-android/',
      github: 'https://github.com/DaviSant0s/projeto-android',
    },
    {
      name: 'Tela Responsiva',
      summary: 'Estudo de responsividade com adaptação fluida para múltiplas larguras.',
      img: project2,
      imageClassName: 'object-top',
      stacks: [cssStack, htmlStack],
      link: 'https://davisant0s.github.io/html-css/exercicios/ex026/mq002/',
      github: 'https://github.com/DaviSant0s/html-css/tree/main/exercicios/ex026/mq002',
    },
    {
      name: 'Cordel Moderno',
      summary: 'Página temática com tipografia marcante e efeito de paralaxe na leitura.',
      img: project3,
      imageClassName: 'object-center',
      stacks: [cssStack, htmlStack],
      link: 'https://davisant0s.github.io/projeto-cordel/',
      github: 'https://github.com/DaviSant0s/projeto-cordel',
    },
    {
      name: 'Projeto Social',
      summary: 'Interface mobile simulada com navegação visual e composição enxuta.',
      img: project4,
      imageClassName: 'object-center',
      stacks: [cssStack, htmlStack],
      link: 'https://davisant0s.github.io/projeto-social/',
      github: 'https://github.com/DaviSant0s/projeto-social',
    },
    {
      name: 'Media Query Lab',
      summary: 'Experimento com breakpoints e componentes ajustados para múltiplas telas.',
      img: project5,
      imageClassName: 'object-top',
      stacks: [cssStack, htmlStack],
      link: 'https://davisant0s.github.io/html-css/exercicios/ex026/mq004/',
      github: 'https://github.com/DaviSant0s/html-css/tree/main/exercicios/ex026/mq004',
    },
    {
      name: 'Meu Site',
      summary: 'Página institucional enxuta para prática de estrutura e composição visual.',
      img: project6,
      imageClassName: 'object-center',
      stacks: [cssStack, htmlStack],
      link: 'https://davisant0s.github.io/html-css/exercicios/ex026/mq005/',
      github: 'https://github.com/DaviSant0s/html-css/tree/main/exercicios/ex026/mq005',
    },
    {
      name: 'Login Responsivo',
      summary: 'Tela de autenticação adaptável com foco em leitura, contraste e clareza.',
      img: project7,
      imageClassName: 'object-top',
      stacks: [cssStack, htmlStack],
      link: 'https://davisant0s.github.io/projeto-login/',
      github: 'https://github.com/DaviSant0s/projeto-login',
    },
  ],
  backend: [
    {
      name: 'API de Autenticação',
      summary: 'API REST para autenticação e proteção de rotas com foco em segurança.',
      img: project9,
      imageClassName: 'object-top',
      stacks: [javascriptStack],
      link: '',
      github: 'https://github.com/DaviSant0s',
    },
  ],
  fullstack: [],
};

export const carouselFilters = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'fullstack', label: 'Fullstack' },
];
