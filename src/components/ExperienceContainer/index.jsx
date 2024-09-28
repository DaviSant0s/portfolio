import ExperienceCard from '../ExperienceCard';
import bytelogo from '../../assets/companies/byte.png';
import petlogo from '../../assets/companies/pet-logo.png';
import './styles.css';

export default function ExperienceContainer() {
  return (
    <div className='experienceContainer-container'>
      <h2>Linha do tempo</h2>
      <div className='timeline-experienceContainer'>
        <ExperienceCard 
        date={"Out de 2022 - Nov de 2023"}
          logo={bytelogo} 
          institution={'Byte Jr. | Empresa Júnior de TI'} 
          description={'Atuei como desenvolvedor frontend, utilizando JavaScript, Node.js, React, HTML e CSS. Fui responsável pelo desenvolvimento de aplicações web, garantindo a criação de interfaces interativas e funcionais, alinhadas às melhores práticas de desenvolvimento.'}
          position={'Desenvolvedor Front-end'}
        />
        <ExperienceCard 
          date={"Jun de 2021 - Maio de 2023"}
          logo={petlogo} 
          institution={'PET Ciências Computacionais - FURG'} 
          description={'Atuei como Coordenador do projeto LEGO nas Escolas, onde era ensinado Pensamento computacional para estudantes de escolas públicas, através dos kits de Robótica LEGO Mindstorms EV3.'}
          position={'Bolsista - Coordenador de projeto'}
        />
      </div>
    </div>
  )
}
