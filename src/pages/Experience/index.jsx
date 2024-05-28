import CardExperience from '../../components/CardExperience';
import bytelogo from '../../assets/companies/byte.jpeg';
import petlogo from '../../assets/companies/pet.jpg';
import './styles.css';

export default function Experience() {
  return (
    <div id='id_experience' className='experience-container defaultPages'>
      <h1>Experiências</h1>
      <div className='experience-content'>
        <CardExperience
          date={'10/2022 - 11/2023'}
          logo={bytelogo}
          companiesName={'Byte Jr. | Empresa Júnior de TI'}
          position={'Desenvolvedor Front-End'}
          description={'Desenvolvedor Fron-End, responsável por desenvolver aplicações web'}
          stacks={'JavaScript, React, HTML, CSS'}
        />

        <CardExperience
          date={'06/2021 - 05/2023'}
          logo={petlogo}
          companiesName={'Programa de Educação Tutorial (PET)'}
          position={'Bolsista - Coordenador de projeto'}
          description='Atuei como Coordenador do projeto LEGO nas Escolas, onde era ensinado Pensamento computacional para estudantes de escolas públicas, através dos kits de Robótica LEGO Mindstorms EV3.'
          stacks={'Mindstorms EV3 Education'}
          styles_logo={{border: '1px solid #c7c6bf', borderRadius: '3px'}}
        />
      </div>
    </div>
  );
}
