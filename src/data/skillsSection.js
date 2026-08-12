import {
  siC,
  siCss,
  siDocker,
  siEslint,
  siExpress,
  siFastapi,
  siFigma,
  siGit,
  siGithub,
  siGithubactions,
  siHtml5,
  siInsomnia,
  siJavascript,
  siJest,
  siJsonwebtokens,
  siKeras,
  siLangchain,
  siLanggraph,
  siMongodb,
  siMongoose,
  siMysql,
  siNodedotjs,
  siOpenapiinitiative,
  siOpenjdk,
  siPostgresql,
  siPostman,
  siPrettier,
  siPython,
  siReact,
  siSequelize,
  siSocketdotio,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  siVite,
} from 'simple-icons';

const createSkill = (name, icon, extra = {}) => ({ name, icon, ...extra });

const conceptBlue = '#61DAFB';
const conceptAI = '#7FC8FF';
const conceptWarm = '#F24E1E';

export const skillsSectionIntro = {
  eyebrow: 'Stack & Ferramentas',
  title: 'Tecnologias que uso na prática',
  description:
    'Minha stack para construir aplicações web, integrar sistemas e desenvolver soluções com inteligência artificial.',
};

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      createSkill('React', siReact),
      createSkill('JavaScript', siJavascript),
      createSkill('TypeScript', siTypescript),
      createSkill('Vite', siVite),
      createSkill('Tailwind CSS', siTailwindcss),
      createSkill('Context API', 'bx-customize', { iconColor: conceptBlue }),
      createSkill('HTML', siHtml5),
      createSkill('CSS', siCss),
    ],
    desktopRows: [
      ['React', 'JavaScript', 'TypeScript', 'Vite', 'Tailwind CSS', 'Context API', 'HTML', 'CSS'],
    ],
  },
  {
    title: 'Backend',
    items: [
      createSkill('Node.js', siNodedotjs),
      createSkill('Express.js', siExpress, { iconDarkColor: 'var(--color-text-strong)' }),
      createSkill('Python', siPython),
      createSkill('FastAPI', siFastapi),
      createSkill('APIs REST', siOpenapiinitiative),
      createSkill('JWT', siJsonwebtokens, { iconDarkColor: 'var(--color-text-strong)' }),
      createSkill('WebSockets', siSocketdotio, { iconDarkColor: 'var(--color-text-strong)' }),
      createSkill('Sequelize', siSequelize),
      createSkill('Mongoose', siMongoose),
    ],
    desktopRows: [
      ['Node.js', 'Express.js', 'Python', 'FastAPI', 'APIs REST'],
      ['JWT', 'WebSockets', 'Sequelize', 'Mongoose'],
    ],
  },
  {
    title: 'Inteligência Artificial',
    items: [
      createSkill('LangChain', siLangchain),
      createSkill('LangGraph', siLanggraph),
      createSkill('RAG', 'bx-brain', { iconColor: conceptAI }),
      createSkill('Embeddings', 'bx-chip', { iconColor: conceptAI }),
      createSkill('Bancos vetoriais', 'bx-data', { iconColor: conceptAI }),
      createSkill('LLMs', 'bx-bot', { iconColor: conceptAI }),
      createSkill('Deep Learning', siTensorflow),
      createSkill('LSTM', siKeras),
      createSkill('Séries temporais', 'bx-line-chart', { iconColor: conceptAI }),
    ],
    desktopRows: [
      ['LangChain', 'LangGraph', 'RAG', 'Embeddings', 'LLMs'],
      ['Bancos vetoriais', 'Deep Learning', 'LSTM', 'Séries temporais'],
    ],
  },
  {
    title: 'Bancos de dados',
    items: [
      createSkill('PostgreSQL', siPostgresql),
      createSkill('MySQL', siMysql),
      createSkill('MongoDB', siMongodb),
    ],
    desktopRows: [
      ['PostgreSQL', 'MySQL', 'MongoDB'],
    ],
  },
  {
    title: 'Ferramentas e qualidade',
    items: [
      createSkill('Git', siGit),
      createSkill('GitHub', siGithub, { iconDarkColor: 'var(--color-text-strong)' }),
      createSkill('Docker', siDocker),
      createSkill('Docker Compose', siDocker),
      createSkill('GitHub Actions', siGithubactions),
      createSkill('Jest', siJest),
      createSkill('Postman', siPostman),
      createSkill('Insomnia', siInsomnia),
      createSkill('ESLint', siEslint),
      createSkill('Prettier', siPrettier),
    ],
    desktopRows: [
      ['Git', 'GitHub', 'Docker', 'Docker Compose', 'GitHub Actions'],
      ['Jest', 'Postman', 'Insomnia', 'ESLint', 'Prettier'],
    ],
  },
  {
    title: 'Outros conhecimentos',
    items: [
      createSkill('Java', siOpenjdk, { iconDarkColor: 'var(--color-text-strong)' }),
      createSkill('C', siC),
      createSkill('Scrum', 'bx-group', { iconColor: conceptWarm }),
      createSkill('Responsividade', 'bx-devices', { iconColor: conceptBlue }),
      createSkill('Acessibilidade', 'bx-accessibility', { iconColor: conceptBlue }),
      createSkill('Figma', siFigma),
    ],
    desktopRows: [
      ['Java', 'C', 'Scrum'],
      ['Responsividade', 'Acessibilidade', 'Figma'],
    ],
  },
];
