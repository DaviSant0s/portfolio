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
import tccPdf from '../../tcc.pdf';
import { siKeras, siTensorflow } from 'simple-icons';

const javascriptStack = { icon: javascript, label: 'JavaScript' };
const typescriptStack = { icon: typescript, label: 'TypeScript' };
const reactStack = { icon: react, label: 'React' };
const nodeStack = { icon: node, label: 'Node.js' };
const pythonStack = { icon: python, label: 'Python' };
const apiStack = { icon: api, label: 'API REST' };
const deepLearningStack = { simpleIcon: siTensorflow, label: 'Deep Learning' };
const lstmStack = { simpleIcon: siKeras, label: 'LSTM' };
const timeSeriesStack = {
  iconClass: 'bx bx-line-chart',
  iconColor: '#7FC8FF',
  label: 'Séries temporais',
};

export const carouselProjects = [
  {
    id: 'claria-task',
    name: 'ClarIA Task',
    badge: 'Projeto aplicado',
    summary:
      'Plataforma inteligente de gestão de tarefas em Kanban, com autenticação, workspaces, boards e refinamento assistido por IA.',
    context: 'LEP | Laboratório de Engenharia de Produção - FURG',
    role: 'Desenvolvedor Frontend Voluntário',
    status: 'Em desenvolvimento',
    description:
      'Atuo como desenvolvedor frontend voluntário na ClarIA Task, conectando a interface em React e Vite a uma API FastAPI com autenticação JWT. O projeto organiza autenticação, workspaces, boards, membros, tarefas, Kanban, busca, filtros, dependências e refinamento assistido por IA.',
    highlights: [
      'Autenticação com JWT',
      'Workspaces, boards e membros',
      'Fluxos Kanban com busca, filtros e dependências',
      'Refinamento assistido por IA',
      'Coautoria de artigo sobre a plataforma',
    ],
    technologies: ['React', 'Vite', 'FastAPI', 'JWT', 'Context API'],
    links: [
      {
        label: 'Abrir projeto',
        href: 'https://claria-task.up.railway.app/',
      },
    ],
    img: clariaTaskLoginPreview,
    imageClassName: 'object-center',
    stacks: [reactStack, javascriptStack, pythonStack, apiStack],
  },
  {
    id: 'agenda-vivaunimed',
    name: 'Agenda VivaUnimed',
    badge: 'Projeto aplicado',
    summary:
      'Sistema de fila inteligente para aproveitamento de vagas remanescentes em consultas médicas, com 8 módulos administrativos, 18 telas e integração com 35 endpoints REST.',
    context: 'Residência em TIC 55 BRISA/FURG | Unimed Litoral Sul',
    role: 'Desenvolvedor Frontend',
    status: 'Projeto institucional',
    description:
      'No contexto da Residência em TIC 55 BRISA/FURG | Unimed Litoral Sul, atuei no frontend da Agenda VivaUnimed, sistema de fila inteligente para aproveitamento de vagas remanescentes em consultas. Participei de uma equipe ágil de 5 desenvolvedores na entrega de 8 módulos administrativos, 18 telas e integração com 35 endpoints REST de uma API Node.js.',
    highlights: [
      'Sistema de fila inteligente para vagas remanescentes',
      '8 módulos administrativos e 18 telas',
      'Integração com 35 endpoints REST',
      'Trabalho em equipe com 5 desenvolvedores',
    ],
    technologies: ['React', 'TypeScript', 'Context API', 'API REST', 'Node.js', 'JWT'],
    img: vivaUnimedPreview,
    imageClassName: 'object-center',
    stacks: [reactStack, javascriptStack, typescriptStack, nodeStack, apiStack],
  },
  {
    id: 'predicao-tendencias-lstm',
    name: 'Predição de Tendências com LSTM',
    badge: 'Pesquisa acadêmica',
    summary:
      'Pesquisa acadêmica sobre classificação de tendências do mercado brasileiro usando redes neurais LSTM.',
    context: 'TCC em Engenharia de Computação',
    role: 'Pesquisa acadêmica',
    status: 'TCC',
    description:
      'Pesquisa acadêmica de TCC em Engenharia de Computação voltada à classificação de tendências de ações brasileiras com LSTM. O estudo usa dados da B3, pré-processamento de séries OHLCV, janelas temporais e avaliação de desempenho do modelo.',
    highlights: [
      'Dados de mercado da B3',
      'Pré-processamento de séries OHLCV',
      'Janelas temporais para entrada do modelo',
      'Avaliação de desempenho de LSTM',
    ],
    technologies: ['Python', 'Deep Learning', 'LSTM', 'Séries temporais'],
    links: [
      {
        label: 'Abrir projeto',
        href: tccPdf,
      },
    ],
    modalImageClassName: 'object-contain bg-[#09131e]',
    img: projectResearch,
    imageClassName: 'object-center',
    stacks: [pythonStack, deepLearningStack, lstmStack, timeSeriesStack],
  },
  {
    id: 'api-autenticacao',
    name: 'API de Autenticação',
    badge: 'Projeto pessoal',
    summary:
      'API REST para autenticação e proteção de rotas, desenvolvida como estudo de backend com foco em segurança.',
    context: 'Estudo de backend',
    role: 'Desenvolvimento de API',
    status: 'Estudo pessoal',
    description:
      'API REST criada como estudo de backend para autenticação e proteção de rotas, reforçando a organização de endpoints e a lógica de segurança da aplicação.',
    highlights: [
      'Autenticação',
      'Proteção de rotas',
      'Organização de endpoints',
      'Estudo de backend',
    ],
    technologies: ['JavaScript', 'Node.js', 'API REST'],
    img: project9,
    imageClassName: 'object-top',
    stacks: [javascriptStack, nodeStack, apiStack],
  },
];
