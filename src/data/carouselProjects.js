import css from '../assets/css1.png';
import html from '../assets/html1.png';
import react from '../assets/react.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import python from '../assets/python.png';
import typescript from '../assets/typescript.png';
import tailwindcss from '../assets/tailwindcss.svg';

import project1 from '../assets/projects/curiosity_and_technology_screen.png';
import project2 from '../assets/projects/resposividadescreen.png';
import project3 from '../assets/projects/cordelscreen.png';
import project4 from '../assets/projects/socialscreen.png';
import project5 from '../assets/projects/mediascreen.png';
import project6 from '../assets/projects/meusitescreen.png';
import project7 from '../assets/projects/loginscreen.png';
import project10 from '../assets/projects/finance.png';
import clariaTaskLoginPreview from '../assets/projects/claria-task-login.png';
import projectResearch from '../assets/projects/lstm-research.svg';
import vivaUnimedPreview from '../assets/projects/vivaunimed.jpg';

import project9 from '../assets/projects/github/projeto_login.png';

const htmlStack = { icon: html, label: 'HTML' };
const cssStack = { icon: css, label: 'CSS' };
const tailwindStack = { icon: tailwindcss, label: 'Tailwind CSS' };
const javascriptStack = { icon: javascript, label: 'JavaScript' };
const typescriptStack = { icon: typescript, label: 'TypeScript' };
const reactStack = { icon: react, label: 'React' };
const nodeStack = { icon: node, label: 'Node.js' };
const pythonStack = { icon: python, label: 'Python' };

export const carouselProjects = {
  applied: [
    {
      name: 'ClarIA Task',
      summary:
        'Plataforma inteligente de gestão de tarefas em Kanban, com autenticação, workspaces, boards e refinamento assistido por IA.',
      img: clariaTaskLoginPreview,
      imageClassName: 'object-center',
      stacks: [reactStack, javascriptStack, pythonStack],
      link: 'https://claria-task.up.railway.app/',
      github: '',
    },
    {
      name: 'Agenda VivaUnimed',
      summary:
        'Sistema de fila inteligente para aproveitamento de vagas remanescentes em consultas médicas, com 8 módulos administrativos, 18 telas e integração com 35 endpoints REST.',
      img: vivaUnimedPreview,
      imageClassName: 'object-center',
      stacks: [reactStack, javascriptStack, typescriptStack, nodeStack],
      link: '',
      github: '',
    },
  ],
  academic: [
    {
      name: 'Predição de Tendências com LSTM',
      summary:
        'Pesquisa acadêmica sobre classificação de tendências do mercado brasileiro usando redes neurais LSTM.',
      img: projectResearch,
      imageClassName: 'object-center',
      stacks: [pythonStack],
      link: '',
      github: '',
    },
  ],
  frontend: [
    {
      name: 'Finance',
      summary: 'Painel financeiro responsivo para estudo de organização e visualização de dados.',
      img: project10,
      imageClassName: 'object-center',
      stacks: [htmlStack, tailwindStack, javascriptStack, reactStack],
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
      summary:
        'API REST para autenticação e proteção de rotas, desenvolvida como estudo de backend com foco em segurança.',
      img: project9,
      imageClassName: 'object-top',
      stacks: [javascriptStack, nodeStack],
      link: '',
      github: 'https://github.com/DaviSant0s',
    },
  ],
};

export const carouselFilters = [
  { key: 'applied', label: 'Aplicados' },
  { key: 'academic', label: 'Acadêmico' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
];
