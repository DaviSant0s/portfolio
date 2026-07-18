import ExperienceCard from '../ExperienceCard';
import bytelogo from '../../assets/companies/byte.png';
import petlogo from '../../assets/companies/pet-logo.png';

const experiences = [
  {
    date: 'Out de 2022 - Nov de 2023',
    logo: bytelogo,
    logoClassName: 'w-[70px] min-[720px]:w-[80px]',
    institution: 'Byte Jr. | Empresa Júnior de TI',
    description: 'Atuei como desenvolvedor frontend, utilizando JavaScript, Node.js, React, HTML e CSS. Fui responsável pelo desenvolvimento de aplicações web, garantindo a criação de interfaces interativas e funcionais, alinhadas às melhores práticas de desenvolvimento.',
    position: 'Desenvolvedor Front-end',
  },
  {
    date: 'Jun de 2021 - Maio de 2023',
    logo: petlogo,
    logoClassName: 'w-[86px] min-[720px]:w-[98px]',
    institution: 'PET Ciências Computacionais - FURG',
    description: 'Atuei como Coordenador do projeto LEGO nas Escolas, onde era ensinado Pensamento computacional para estudantes de escolas públicas, através dos kits de Robótica LEGO Mindstorms EV3.',
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
            institution={experience.institution}
            description={experience.description}
            position={experience.position}
          />
        ))}
      </div>
    </div>
  )
}
