import ExperienceCard from '../ExperienceCard';
import bytelogo from '../../assets/companies/byte.png';
import brisalogo from '../../assets/companies/brisa.png';
import iteclogo from '../../assets/companies/itec.png';
import leplogo from '../../assets/companies/lep.png';
import petlogo from '../../assets/companies/pet-logo.png';

const experiences = [
  {
    startDate: '2025-09',
    date: 'Set de 2025 - Presente',
    logo: leplogo,
    logoClassName: 'w-[68px] scale-[1.12] min-[720px]:w-[72px]',
    logoSurfaceClassName: 'px-2',
    institution: 'LEP | Laboratório de Engenharia de Produção',
    description: 'Atuo como desenvolvedor frontend voluntário no projeto ClarIA Task, plataforma inteligente de gestão de tarefas em Kanban. Trabalho na construção da interface em React, criando telas, componentes reutilizáveis, fluxos de interação e integrações voltadas à organização e clareza das demandas.',
    position: 'Desenvolvedor Front-end Voluntário',
  },
  {
    startDate: '2026-03',
    date: 'Mar de 2026 - Set de 2026 (em andamento)',
    logo: brisalogo,
    logoClassName: 'w-[68px] min-[720px]:w-[74px]',
    logoSurfaceClassName: 'px-2',
    institution: 'Residência em TIC 55 BRISA/FURG | Unimed Litoral Sul',
    description: 'Atuo como desenvolvedor frontend no projeto Agenda VivaUnimed, sistema de fila inteligente para vagas remanescentes de consultas médicas. Contribuo com os módulos administrativo e do paciente, incluindo autenticação, gestão de cadastros, vagas e confirmações.',
    position: 'Desenvolvedor Frontend - Agenda VivaUnimed',
  },
  {
    startDate: '2026-02',
    date: 'Fev de 2026 - Jan de 2027 (em andamento)',
    logo: iteclogo,
    logoClassName: 'w-[60px] scale-[1.06] min-[720px]:w-[64px]',
    institution: 'iTec/FURG | Centro de Robótica e Ciência de Dados',
    description: 'Participo como bolsista no programa Capacitação 4.0, com foco em soft skills aplicadas a projetos de inovação tecnológica. A atuação está ligada ao ecossistema do iTec/FURG, voltado a robótica, automação, visão computacional, ciência de dados e inteligência artificial.',
    position: 'Bolsista de Capacitação 4.0 - Soft Skills',
  },
  {
    startDate: '2022-10',
    date: 'Out de 2022 - Nov de 2023',
    logo: bytelogo,
    logoClassName: 'w-[62px] min-[720px]:w-[68px]',
    institution: 'Byte Jr. | Empresa Júnior de TI',
    description: 'Atuei no desenvolvimento de aplicações web responsivas com JavaScript, React, HTML, CSS, Node.js e MongoDB. Tive contato com Scrum, Git e GitHub, além de colaborar diretamente com clientes para entender necessidades e transformar requisitos em interfaces funcionais.',
    position: 'Desenvolvedor Front-end',
  },
  {
    startDate: '2021-06',
    date: 'Jun de 2021 - Maio de 2023',
    logo: petlogo,
    logoClassName: 'w-[72px] min-[720px]:w-[78px]',
    institution: 'PET C3 FURG',
    description: 'Coordenei o projeto LEGO nas Escolas, voltado ao ensino de pensamento computacional para alunos de escolas públicas. Organizei atividades, conduzi encontros semanais e atuei em aulas com Scratch, fluxogramas e programação de robôs EV3 Mindstorms.',
    position: 'Bolsista - Coordenador de projeto',
  },
];

const timelineExperiences = [...experiences].sort((a, b) => b.startDate.localeCompare(a.startDate));

export default function ExperienceContainer() {
  return (
    <div className='w-full max-w-[860px]'>
      <div className='mb-4 pl-[6.5rem] max-[640px]:mb-4 max-[640px]:pl-0'>
        <h2 className='text-[1.16rem] font-semibold tracking-[-0.02em] text-copy-strong min-[500px]:text-[1.28rem]'>
          Linha do tempo
        </h2>
      </div>
      <div className='relative flex flex-col gap-6 pt-2 before:absolute before:top-14 before:bottom-12 before:left-10 before:block before:w-px before:bg-primary before:opacity-45 before:content-[""] min-[500px]:gap-8 min-[500px]:pt-3 max-[640px]:before:hidden'>
        {timelineExperiences.map((experience) => (
          <ExperienceCard
            key={`${experience.institution}-${experience.date}`}
            date={experience.date}
            logo={experience.logo}
            logoClassName={experience.logoClassName}
            logoSurfaceClassName={experience.logoSurfaceClassName}
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
