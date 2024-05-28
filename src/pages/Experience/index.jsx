import CardExperience from '../../components/CardExperience';
import bytelogo from '../../assets/companies/byte.png';
/* import petlogo from '../../assets/companies/pet.jpg'; */
import petlogo from '../../assets/companies/pet-logo.png';
import './styles.css';

export default function Experience() {
  return (
    <div id='id_experience' className='experience-container defaultPages'>
      <h1>Experiências</h1>
      <div className='experience-content'>

        <CardExperience
          date={'Jun/2021 - Mai/2023'}
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
        />
      </div>
    </div>
  );
}
