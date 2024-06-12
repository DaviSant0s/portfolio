import bytelogo from '../../assets/companies/byte.png';
import petlogo from '../../assets/companies/pet-logo.png';
import './styles.css';
import ExperienceContainer from '../../components/ExperienceContainer';
import { useContext } from 'react';
import { GlobalAnimationContext } from '../../context/AnimationContext';

export default function Experience() {
  // estado global para animação do titulo

  const titleContext = useContext(GlobalAnimationContext);
  const animationTitle = titleContext.animationExperience;

  // fim
  return (
    <div id='id_experience' className='experience-container defaultPages'>
      <h1 id='id_title_experience'>
        Experiências
        <div style={animationTitle} className='animationTitle'></div>
      </h1>
      <div className='experience-content'>

        <ExperienceContainer/>
        
      </div>
    </div>
  );
}

{/* <CardExperience
  date={'Jun/21 - Mai/23'}
  logo={petlogo}
  companiesName={'PET Ciências Computacionais - FURG'}
  position={'Bolsista - Coordenador de projeto'}
  description='Atuei como Coordenador do projeto LEGO nas Escolas, onde era ensinado Pensamento computacional para estudantes de escolas públicas, através dos kits de Robótica LEGO Mindstorms EV3.'
  stacks={'Mindstorms EV3 Education'}
  styles_logo={{height: '2.2em'}}
/>

<CardExperience
  date={'Out/22 - Nov/23'}
  logo={bytelogo}
  companiesName={'Byte Jr. | Empresa Júnior de TI'}
  position={'Desenvolvedor Front-End'}
  description={'Desenvolvedor Fron-End, responsável por desenvolver aplicações web'}
  stacks={'JavaScript, React, HTML, CSS'}
/> */}