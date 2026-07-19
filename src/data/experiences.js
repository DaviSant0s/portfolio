import bytelogo from '../assets/companies/byte.png';
import brisalogo from '../assets/companies/brisa.png';
import iteclogo from '../assets/companies/itec.png';
import leplogo from '../assets/companies/lep.png';
import petlogo from '../assets/companies/pet-logo.png';
import clariaTaskLoginPreview from '../assets/projects/claria-task-login.png';

export const experiences = [
  {
    id: 'lep-claria-task',
    type: 'project',
    startDate: '2025-09',
    date: 'Set de 2025 - Presente',
    projectName: 'ClarIA Task',
    projectUrl: 'https://claria-task.up.railway.app/login',
    projectPreview: clariaTaskLoginPreview,
    projectSummary:
      'Plataforma que utiliza Inteligencia Artificial para auxiliar na descricao e no detalhamento de tarefas superficiais, melhorando a clareza das demandas e o fluxo de trabalho da equipe.',
    projectHighlights: ['React', 'Kanban', 'Boards compartilhados'],
    logo: leplogo,
    logoClassName: 'w-[60px] scale-[1.08] min-[500px]:w-[66px]',
    logoSurfaceClassName: 'px-2',
    institution: 'LEP | Laboratório de Engenharia de Produção',
    description: 'Atuo como desenvolvedor frontend voluntário no projeto ClarIA Task, plataforma inteligente de gestão de tarefas em Kanban. Trabalho na construção da interface em React, criando telas, componentes reutilizáveis, fluxos de interação e integrações voltadas à organização e clareza das demandas.',
    position: 'Desenvolvedor Front-end Voluntário',
    technologies: [
      'React',
      'Kanban',
      'Componentes reutilizáveis',
      'Fluxos de interação',
      'Integração entre telas',
    ],
  },
  {
    id: 'brisa-viva-unimed',
    type: 'residency',
    startDate: '2026-03',
    date: 'Mar de 2026 - Set de 2026 (em andamento)',
    logo: brisalogo,
    logoClassName: 'w-[60px] min-[500px]:w-[66px]',
    logoSurfaceClassName: 'px-2',
    institution: 'Residência em TIC 55 BRISA/FURG | Unimed Litoral Sul',
    description: 'Atuo como desenvolvedor frontend no projeto Agenda VivaUnimed, sistema de fila inteligente para vagas remanescentes de consultas médicas. Contribuo com os módulos administrativo e do paciente, incluindo autenticação, gestão de cadastros, vagas e confirmações.',
    position: 'Desenvolvedor Frontend - Agenda VivaUnimed',
    technologies: [
      'Frontend',
      'Autenticação',
      'Gestão de cadastros',
      'Fluxo de vagas',
      'Experiência do paciente',
    ],
  },
  {
    id: 'itec-capacitacao-4-0',
    type: 'research',
    startDate: '2026-02',
    date: 'Fev de 2026 - Jan de 2027 (em andamento)',
    logo: iteclogo,
    logoClassName: 'w-[54px] scale-[1.04] min-[500px]:w-[60px]',
    institution: 'iTec/FURG | Centro de Robótica e Ciência de Dados',
    description: 'Participo como bolsista no programa Capacitação 4.0, com foco em soft skills aplicadas a projetos de inovação tecnológica. A atuação está ligada ao ecossistema do iTec/FURG, voltado a robótica, automação, visão computacional, ciência de dados e inteligência artificial.',
    position: 'Bolsista de Capacitação 4.0 - Soft Skills',
    technologies: [
      'Inteligência Artificial',
      'Robótica',
      'Visão Computacional',
      'Ciência de Dados',
      'Soft Skills',
    ],
  },
  {
    id: 'byte-jr',
    type: 'juniorCompany',
    startDate: '2022-10',
    date: 'Out de 2022 - Nov de 2023',
    logo: bytelogo,
    logoClassName: 'w-[56px] min-[500px]:w-[62px]',
    institution: 'Byte Jr. | Empresa Júnior de TI',
    description: 'Atuei no desenvolvimento de aplicações web responsivas com JavaScript, React, HTML, CSS, Node.js e MongoDB. Tive contato com Scrum, Git e GitHub, além de colaborar diretamente com clientes para entender necessidades e transformar requisitos em interfaces funcionais.',
    position: 'Desenvolvedor Front-end',
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
    date: 'Jun de 2021 - Maio de 2023',
    logo: petlogo,
    logoClassName: 'w-[66px] min-[500px]:w-[72px]',
    institution: 'PET C3 FURG',
    description: 'Coordenei o projeto LEGO nas Escolas, voltado ao ensino de pensamento computacional para alunos de escolas públicas. Organizei atividades, conduzi encontros semanais e atuei em aulas com Scratch, fluxogramas e programação de robôs EV3 Mindstorms.',
    position: 'Bolsista - Coordenador de projeto',
    technologies: [
      'Pensamento computacional',
      'Scratch',
      'Robótica EV3',
      'Ensino',
      'Coordenação de projeto',
    ],
  },
];

export const timelineExperiences = [...experiences].sort((a, b) =>
  b.startDate.localeCompare(a.startDate),
);
