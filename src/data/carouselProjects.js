import react from '../assets/react.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import python from '../assets/python.png';
import typescript from '../assets/typescript.png';
import api from '../assets/api.png';

import clariaTaskLoginPreview from '../assets/projects/claria-task-login.png';
import projectResearch from '../assets/projects/lstm-research.svg';
import vivaUnimedPreview from '../assets/projects/vivaunimed.jpg';

import project9 from '../assets/projects/github/projeto_login.png';

const javascriptStack = { icon: javascript, label: 'JavaScript' };
const typescriptStack = { icon: typescript, label: 'TypeScript' };
const reactStack = { icon: react, label: 'React' };
const nodeStack = { icon: node, label: 'Node.js' };
const pythonStack = { icon: python, label: 'Python' };
const apiStack = { icon: api, label: 'API REST' };

export const carouselProjects = [
  {
    name: 'ClarIA Task',
    badge: 'Projeto aplicado',
    summary:
      'Plataforma inteligente de gestão de tarefas em Kanban, com autenticação, workspaces, boards e refinamento assistido por IA.',
    img: clariaTaskLoginPreview,
    imageClassName: 'object-center',
    stacks: [reactStack, javascriptStack, pythonStack, apiStack],
    link: 'https://claria-task.up.railway.app/',
    github: '',
  },
  {
    name: 'Agenda VivaUnimed',
    badge: 'Projeto aplicado',
    summary:
      'Sistema de fila inteligente para aproveitamento de vagas remanescentes em consultas médicas, com 8 módulos administrativos, 18 telas e integração com 35 endpoints REST.',
    img: vivaUnimedPreview,
    imageClassName: 'object-center',
    stacks: [reactStack, javascriptStack, typescriptStack, nodeStack, apiStack],
    link: '',
    github: '',
  },
  {
    name: 'Predição de Tendências com LSTM',
    badge: 'Pesquisa acadêmica',
    summary:
      'Pesquisa acadêmica sobre classificação de tendências do mercado brasileiro usando redes neurais LSTM.',
    img: projectResearch,
    imageClassName: 'object-center',
    stacks: [pythonStack],
    link: '',
    github: '',
  },
  {
    name: 'API de Autenticação',
    badge: 'Projeto pessoal',
    summary:
      'API REST para autenticação e proteção de rotas, desenvolvida como estudo de backend com foco em segurança.',
    img: project9,
    imageClassName: 'object-top',
    stacks: [javascriptStack, nodeStack, apiStack],
    link: '',
    github: '',
  },
];
