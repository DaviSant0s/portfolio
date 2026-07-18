import ExperienceCard from '../ExperienceCard';
import bytelogo from '../../assets/companies/byte.png';
import petlogo from '../../assets/companies/pet-logo.png';

const experiences = [
  {
    date: 'Out de 2022 - Nov de 2023',
    logo: bytelogo,
    institution: 'Byte Jr. | Empresa Júnior de TI',
    description: 'Atuei como desenvolvedor frontend, utilizando JavaScript, Node.js, React, HTML e CSS. Fui responsável pelo desenvolvimento de aplicações web, garantindo a criação de interfaces interativas e funcionais, alinhadas às melhores práticas de desenvolvimento.',
    position: 'Desenvolvedor Front-end',
  },
  {
    date: 'Jun de 2021 - Maio de 2023',
    logo: petlogo,
    institution: 'PET Ciências Computacionais - FURG',
    description: 'Atuei como Coordenador do projeto LEGO nas Escolas, onde era ensinado Pensamento computacional para estudantes de escolas públicas, através dos kits de Robótica LEGO Mindstorms EV3.',
    position: 'Bolsista - Coordenador de projeto',
  },
];

export default function ExperienceContainer() {
  return (
    <div className='w-full max-w-[720px]'>
      <div className='mb-5 flex items-center gap-3'>
        <div className='h-px flex-1 bg-outline-muted' />
        <h2 className='text-xl font-medium text-copy-strong'>
          Linha do tempo
        </h2>
        <div className='h-px flex-1 bg-outline-muted' />
      </div>
      <div className='relative mt-8 space-y-6 pl-10 max-[370px]:pl-0 before:absolute before:top-4 before:bottom-4 before:left-[14px] before:w-px before:bg-primary-soft/70 before:content-[""] max-[370px]:before:hidden'>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.institution}-${experience.date}`}
            date={experience.date}
            logo={experience.logo}
            institution={experience.institution}
            description={experience.description}
            position={experience.position}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
