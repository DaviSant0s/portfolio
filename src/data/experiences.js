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
      'Atuo no frontend do painel administrativo da Agenda VivaUnimed, sistema de fila inteligente para vagas remanescentes de consultas médicas. Participo da implementação de módulos, telas e integrações com uma API Node.js, em uma equipe ágil de 5 desenvolvedores.',
    position: 'Desenvolvedor Frontend - Agenda VivaUnimed',
    technologies: ['React', 'Context API', 'API REST', 'Node.js', 'JWT'],
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
      'Participo do programa Capacitação 4.0 no iTec/FURG, com foco no desenvolvimento de competências socioemocionais aplicadas a projetos de inovação tecnológica. A vivência fortalece comunicação, colaboração, liderança e resolução de problemas.',
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
      'Plataforma inteligente de gestão de tarefas em Kanban, desenvolvida com React e Vite, com autenticação, workspaces, boards e refinamento assistido por IA.',
    projectHighlights: ['React', 'Vite', 'Kanban', 'IA aplicada'],
    logo: leplogo,
    logoClassName: 'w-[60px] scale-[1.08] min-[500px]:w-[66px]',
    logoSurfaceClassName: 'px-2',
    institution: 'LEP | Laboratório de Engenharia de Produção',
    description:
      'Atuo como desenvolvedor frontend voluntário na ClarIA Task, plataforma de gestão inteligente de tarefas em Kanban. Construo a interface em React e Vite, integrando autenticação, workspaces, boards, membros e refinamento de tarefas com IA.',
    position: 'Desenvolvedor Front-end Voluntário',
    technologies: ['React', 'Vite', 'FastAPI', 'JWT', 'Context API'],
  },
  {
    id: 'byte-jr',
    type: 'juniorCompany',
    startDate: '2022-10',
    date: '10/2022 - 11/2023',
    logo: bytelogo,
    logoClassName: 'w-[56px] min-[500px]:w-[62px]',
    institution: 'Byte Jr. | Empresa Júnior de TI',
    description:
      'Atuei no desenvolvimento de sites responsivos para clientes externos utilizando JavaScript, React, HTML e CSS, com apoio de Node.js e MongoDB quando necessário. Também participei do levantamento de requisitos e da rotina ágil com Scrum, Git e GitHub.',
    position: 'Desenvolvedor Frontend',
    technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Scrum'],
  },
  {
    id: 'pet-c3-furg',
    type: 'teaching',
    startDate: '2021-06',
    date: '06/2021 - 05/2023',
    logo: petlogo,
    logoClassName: 'w-[66px] min-[500px]:w-[72px]',
    institution: 'PET C3 FURG',
    description:
      'Coordenei o projeto LEGO nas Escolas, planejando oficinas de pensamento computacional para turmas de escolas públicas, conduzindo encontros semanais e apoiando atividades com Scratch e robótica EV3 Mindstorms.',
    position: 'Bolsista | Coordenador do projeto LEGO nas Escolas',
    technologies: [
      'Pensamento computacional',
      'Scratch',
      'EV3 Mindstorms',
      'Ensino',
      'Coordenação',
    ],
  },
];

export const timelineExperiences = [...experiences].sort((a, b) =>
  b.startDate.localeCompare(a.startDate),
);
