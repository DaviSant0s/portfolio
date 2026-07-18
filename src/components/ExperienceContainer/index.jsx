import ExperienceCard from '../ExperienceCard';
import bytelogo from '../../assets/companies/byte.png';
import petlogo from '../../assets/companies/pet-logo.png';

const experiences = [
  {
    date: 'Set de 2025 - Presente',
    logo: null,
    logoFallback: 'LEP',
    institution: 'LEP | Laboratório de Engenharia de Produção',
    description: 'Atuo como desenvolvedor frontend voluntário no projeto ClarIA Task, plataforma inteligente de gestão de tarefas em Kanban. Trabalho na construção da interface em React, criando telas, componentes reutilizáveis, fluxos de interação e integrações voltadas à organização e clareza das demandas.',
    position: 'Desenvolvedor Front-end Voluntário',
  },
  {
    date: 'Mar de 2026 - Set de 2026 (em andamento)',
    logo: null,
    logoFallback: 'BRISA',
    institution: 'Residência em TIC 55 BRISA/FURG | Unimed Litoral Sul',
    description: 'Atuo como desenvolvedor frontend no projeto Agenda VivaUnimed, sistema de fila inteligente para vagas remanescentes de consultas médicas. Contribuo com os módulos administrativo e do paciente, incluindo autenticação, gestão de cadastros, vagas e confirmações.',
    position: 'Desenvolvedor Frontend - Agenda VivaUnimed',
  },
  {
    date: 'Fev de 2026 - Jan de 2027 (em andamento)',
    logo: null,
    logoFallback: 'iTec',
    institution: 'iTec/FURG | Centro de Robótica e Ciência de Dados',
    description: 'Participo como bolsista no programa Capacitação 4.0, com foco em soft skills aplicadas a projetos de inovação tecnológica. A atuação está ligada ao ecossistema do iTec/FURG, voltado a robótica, automação, visão computacional, ciência de dados e inteligência artificial.',
    position: 'Bolsista de Capacitação 4.0 - Soft Skills',
  },
  {
    date: 'Out de 2022 - Nov de 2023',
    logo: bytelogo,
    logoClassName: 'w-[70px] min-[720px]:w-[80px]',
    institution: 'Byte Jr. | Empresa Júnior de TI',
    description: 'Atuei no desenvolvimento de aplicações web responsivas com JavaScript, React, HTML, CSS, Node.js e MongoDB. Tive contato com Scrum, Git e GitHub, além de colaborar diretamente com clientes para entender necessidades e transformar requisitos em interfaces funcionais.',
    position: 'Desenvolvedor Front-end',
  },
  {
    date: 'Jun de 2021 - Maio de 2023',
    logo: petlogo,
    logoClassName: 'w-[86px] min-[720px]:w-[98px]',
    institution: 'PET C3 FURG',
    description: 'Coordenei o projeto LEGO nas Escolas, voltado ao ensino de pensamento computacional para alunos de escolas públicas. Organizei atividades, conduzi encontros semanais e atuei em aulas com Scratch, fluxogramas e programação de robôs EV3 Mindstorms.',
    position: 'Bolsista - Coordenador de projeto',
  },
];

export default function ExperienceContainer() {
  return (
    <div className='w-full max-w-[860px]'>
      <div className='mb-4 pl-[6.5rem] max-[640px]:mb-4 max-[640px]:pl-0'>
        <h2 className='text-[1.16rem] font-semibold tracking-[-0.02em] text-copy-strong min-[500px]:text-[1.28rem]'>
          Linha do tempo
        </h2>
      </div>
      <div className='relative flex flex-col gap-6 pt-2 before:absolute before:top-14 before:bottom-12 before:left-10 before:block before:w-px before:bg-primary before:opacity-45 before:content-[""] min-[500px]:gap-8 min-[500px]:pt-3 max-[640px]:before:hidden'>
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.institution}-${experience.date}`}
            date={experience.date}
            logo={experience.logo}
            logoClassName={experience.logoClassName}
            logoFallback={experience.logoFallback}
            institution={experience.institution}
            description={experience.description}
            position={experience.position}
          />
        ))}
      </div>
    </div>
  )
}
