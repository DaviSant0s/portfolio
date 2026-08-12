import bytelogo from '../assets/companies/byte.png';
import brisalogo from '../assets/companies/brisa.png';
import iteclogo from '../assets/companies/itec.png';
import leplogo from '../assets/companies/lep.png';
import petlogo from '../assets/companies/pet-logo.png';
import clariaTaskLoginPreview from '../assets/projects/claria-task-login.png';

export const experiences = [
  {
    id: 'brisa-viva-unimed',
    type: 'residency',
    startDate: '2026-03',
    date: '03/2026 - Presente | término previsto: 09/2026',
    logo: brisalogo,
    logoClassName: 'w-[60px] min-[500px]:w-[66px]',
    logoSurfaceClassName: 'px-2',

    institution: 'Residência em TIC 55 BRISA/FURG | Unimed Litoral Sul',

    description:
      'Atuo no desenvolvimento frontend da Agenda VivaUnimed, sistema de fila inteligente para aproveitamento de vagas remanescentes em consultas médicas. Em uma equipe ágil de 5 desenvolvedores, participei da implementação e integração de 8 módulos administrativos, totalizando 18 telas e integração com 35 endpoints REST de uma API Node.js.',

    position: 'Desenvolvedor Frontend - Agenda VivaUnimed',

    technologies: [
      'React',
      'Context API',
      'API REST',
      'Node.js',
      'JWT',
    ],
  },

  {
    id: 'itec-capacitacao-4-0',
    type: 'research',
    startDate: '2026-02',
    date: '02/2026 - Presente | término previsto: 01/2027',
    logo: iteclogo,
    logoClassName: 'w-[54px] scale-[1.04] min-[500px]:w-[60px]',

    institution: 'iTec/FURG | Centro de Robótica e Ciência de Dados',

    description:
      'Participo do Programa Capacitação 4.0 da Unidade EMBRAPII iTec/FURG, voltado ao desenvolvimento de competências socioemocionais aplicadas a projetos de inovação tecnológica, com atividades focadas em comunicação, colaboração, liderança, trabalho em equipe e resolução de problemas.',

    position: 'Bolsista de Capacitação 4.0 - Soft Skills',

    technologies: [
      'Comunicação',
      'Colaboração',
      'Liderança',
      'Trabalho em equipe',
      'Resolução de problemas',
    ],
  },

  {
    id: 'lep-claria-task',
    type: 'project',
    startDate: '2025-09',
    date: '09/2025 - Presente',

    projectName: 'ClarIA Task',
    projectUrl: 'https://claria-task.up.railway.app/',
    projectPreview: clariaTaskLoginPreview,

    projectSummary:
      'Plataforma web de gestão inteligente de tarefas em Kanban, com autenticação, workspaces, boards, colaboração em equipe e refinamento de tarefas com Inteligência Artificial.',

    projectHighlights: [
      'React',
      'Vite',
      'FastAPI',
      'IA aplicada',
    ],

    logo: leplogo,
    logoClassName: 'w-[60px] scale-[1.08] min-[500px]:w-[66px]',
    logoSurfaceClassName: 'px-2',

    institution: 'LEP | Laboratório de Engenharia de Produção - FURG',

    description:
      'Atuo como desenvolvedor frontend voluntário na ClarIA Task, construindo e integrando fluxos de autenticação, workspaces, boards, membros, tarefas, Kanban, busca, filtros, dependências e refinamento assistido por IA. A interface em React e Vite é integrada a uma API FastAPI com autenticação JWT. Também sou coautor de artigo sobre o desenvolvimento e a avaliação exploratória da plataforma.',

    position: 'Desenvolvedor Frontend Voluntário',

    technologies: [
      'React',
      'Vite',
      'FastAPI',
      'JWT',
      'Context API',
    ],
  },

  {
    id: 'byte-jr',
    type: 'juniorCompany',
    startDate: '2022-10',
    date: '10/2022 - 11/2023',
    logo: bytelogo,
    logoClassName: 'w-[56px] min-[500px]:w-[62px]',

    institution: 'Byte Jr. | Empresa Júnior de Tecnologia',

    description:
      'Atuei no desenvolvimento de sites completos e responsivos para clientes externos utilizando React, JavaScript, HTML e CSS, com apoio de Node.js e MongoDB quando necessário. Também participei do levantamento de requisitos e do contato com clientes, transformando necessidades de negócio em interfaces funcionais dentro de uma rotina ágil com Scrum, Git e GitHub.',

    position: 'Desenvolvedor Frontend',

    technologies: [
      'React',
      'JavaScript',
      'Node.js',
      'MongoDB',
      'Scrum',
    ],
  },

  {
    id: 'pet-c3-furg',
    type: 'teaching',
    startDate: '2021-06',
    date: '06/2021 - 05/2023',
    logo: petlogo,
    logoClassName: 'w-[66px] min-[500px]:w-[72px]',

    institution: 'PET C3 | FURG',

    description:
      'Coordenei uma equipe de 8 integrantes no projeto LEGO nas Escolas, planejando atividades, distribuindo responsabilidades e conduzindo reuniões semanais. Organizamos cerca de 25 oficinas de pensamento computacional em duas escolas públicas, utilizando algoritmos, fluxogramas, Scratch e robótica LEGO Mindstorms EV3 com turmas de aproximadamente 20 alunos.',

    position: 'Bolsista | Coordenador do projeto LEGO nas Escolas',

    technologies: [
      'Pensamento computacional',
      'Scratch',
      'LEGO Mindstorms EV3',
      'Ensino',
      'Liderança',
    ],
  },
];

export const timelineExperiences = [...experiences].sort((a, b) =>
  b.startDate.localeCompare(a.startDate),
);
