import CardCertification from '../../components/CardCertification';

import udemy from '../../assets/companies/udemy2.png';
import cursoEmVideo from '../../assets/companies/curso-em-video.jpg';
import telos from '../../assets/companies/telos.jpeg';
import microsoft from '../../assets/companies/microsoft.png';
import estudonauta from '../../assets/companies/estudonauta.jpg';

import { useContext, useState } from 'react';
import Button from '../../components/Button';
import { Link } from 'react-scroll';
import './styles.css';
import { GlobalAnimationContext } from '../../context/AnimationContext';
import FilterField from '../../components/FilterField';

const DataCertifications = [
  {
    id: -2,
    status: false,
    name: 'Banco de Dados e SQL',
    icon: "bx bxl-javascript",
    img: udemy,
    description: 'Business Intelligence, SQL Server, MySQL, Oracle, T-SQL e PLSQL',
    institution: 'Udemy',
    conclusion: '2024',
    duration: '58,5 horas',
    link_institution: 'https://www.udemy.com/course/bancos-de-dados-relacionais-basico-avancado/?couponCode=KEEPLEARNING',
    style_icone: {borderRadius: '3px'},
  },
  {
    id: -1,
    status: false,
    name: 'Node.js',
    icon: "",
    img: udemy,
    description: 'Node.js do zero a Maestria com diversos Projetos',
    institution: 'Udemy',
    conclusion: '2024',
    duration: '38 horas',
    link_institution: 'https://www.udemy.com/course/nodejs-do-zero-a-maestria-com-diversos-projetos/?couponCode=KEEPLEARNING',
    style_icone: {borderRadius: '3px'},
  },
  
  {
    id: 0,
    status: true,
    name: 'Javascript',
    icon: "bx bxl-javascript",
    img: udemy,
    description: 'JavaScript e TypeScript do básico ao avançado',
    institution: 'Udemy',
    conclusion: '2024',
    duration: '93 horas',
    link_institution: 'https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/?couponCode=KEEPLEARNING',
    style_icone: {borderRadius: '3px'},
  },
  {
    id: 1,
    status: true,
    name: 'React + Next.js',
    icon: "bx bxl-react",
    img: udemy,
    description: 'React.Js e Next.Js (Intermediário e Avançado)',
    institution: 'Udemy',
    conclusion: '2024',
    duration: '146 horas',
    link_institution: 'https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/?couponCode=KEEPLEARNING',
    style_icone: {borderRadius: '3px'},
  },
  {
    id: 2,
    status: true,
    name: 'HTML5 e CSS3',
    icon: "bx bxl-html5",
    img: cursoEmVideo,
    description: 'Do básico ao avançado',
    institution: 'Curso em vídeo',
    conclusion: '2023',
    duration: '160 horas',
    link_institution: 'https://www.cursoemvideo.com/',
    style_icone: {borderRadius: '3px'},
  },
  {
    id: 3,
    status: true,
    name: 'Backend',
    icon: "bx bxl-nodejs",
    img: telos,
    description: 'Capacitação backend com nodejs e MongoDB',
    institution: 'Télos',
    conclusion: '2024',
    duration: 'null',
    link_institution: 'https://www.telosconecta.com/en-US',
    style_icone: {borderRadius: '3px'},
  },
  {
    id: 4,
    status: true,
    name: 'Python',
    icon: "bx bxl-python",
    img: cursoEmVideo,
    description: 'Do básico ao avançado',
    institution: 'Curso em vídeo',
    conclusion: '2022',
    duration: '120 horas',
    link_institution: 'https://www.cursoemvideo.com/',
    link_credential: '',
    style_icone: {borderRadius: '3px'},
  },
  
  {
    id: 5,
    status: true,
    name: 'git',
    icon: "bx bxl-git",
    img: microsoft,
    description: 'Introdução ao Git',
    institution: 'Microsoft Learn',
    conclusion: '2024',
    duration: 'null',
    link_institution: 'https://learn.microsoft.com/pt-br/training/browse/',
    link_credential: 'https://drive.google.com/file/d/1hKURT3dkYVdj1A6jdXkFCl_AMrobokFh/view',
    style_icone: {border: '1px solid #c7c6bf'},
  },

  {
    id: 6,
    status: true,
    name: 'git',
    icon: "bx bxl-git",
    img: microsoft,
    description: 'Como criar e modificar um projeto Git',
    institution: 'Microsoft Learn',
    conclusion: '2024',
    duration: 'null',
    link_institution: 'https://learn.microsoft.com/pt-br/training/browse/',
    link_credential: 'https://drive.google.com/file/d/1hKw_BF0ucbKRE3nSW0l2_6UvyPsvkshb/view',
    style_icone: {border: '1px solid #c7c6bf'},
  },

  {
    id: 7,
    status: true,
    name: 'React',
    icon: "bx bxl-react",
    img: telos,
    description: 'Programa de capacitação da Télos',
    institution: 'Télos',
    conclusion: '2023',
    duration: 'null',
    link_institution: 'https://www.telosconecta.com/en-US',
    link_credential: '',
    style_icone: {borderRadius: '3px'},
  },
  {
    id: 8,
    status: true,
    name: 'Git + GitHub',
    icon: "bx bxl-github",
    img: telos,
    description: 'Programa de capacitação da Télos',
    institution: 'Télos',
    conclusion: '2023',
    duration: 'null',
    link_institution: 'https://www.telosconecta.com/en-US',
    link_credential: '',
    style_icone: {borderRadius: '3px'},
  },
  {
    id: 9,
    status: true,
    name: 'Wordpress',
    icon: "bx bxl-wordpress",
    img: estudonauta,
    description: 'Wordpress com gutenberg',
    institution: 'Estudonauta',
    conclusion: '2021',
    duration: '80 horas',
    link_institution: 'https://www.estudonauta.com/',
    link_credential: '',
    style_icone: {borderRadius: '3px'},
  },
  {
    id: 10,
    status: true,
    name: 'Algoritmo + visualG',
    icon: '',
    img: cursoEmVideo,
    description: 'Algoritmos e Lógica de Programação',
    institution: 'Curso em vídeo',
    conclusion: '2020',
    duration: '40 horas',
    link_institution: 'https://www.cursoemvideo.com/',
    link_credential: '',
    style_icone: {borderRadius: '3px'},
  }
];

export default function Certifications() {

  // estado global para animação do titulo

  const titleContext = useContext(GlobalAnimationContext);
  const animationTitle = titleContext.animationCertification;

  // fim

  const [ moreCardsBool, setMoreCardsBool ] = useState(false);

  const handleClickBtnMoreCardsBool = () => {
    setMoreCardsBool(true)
  }

  const handleClickBtnLessCardsBool = () => {
    setTimeout(() => {
      setMoreCardsBool(false)
    }, 100)
  }

  return (
    <div className='certifications-container' id='id_certifications'>
      <div className={`certifications-content ${moreCardsBool ? 'certifications-viewMore-true' : 'certifications-viewMore-false'}`}>

        <h1 id='id_title_certifications'>
          Certificações
          <div style={animationTitle} className='animationTitle'/>
        </h1>

        <FilterField/>

        <div className={`cards-certifications-grid ${moreCardsBool ? 'cards-certifications-grid-viwMore-true' : 'cards-certifications-grid-viwMore-false'}`}>

          {DataCertifications.map((data, index) => (

            <div key={index}>
              <CardCertification
                icon={data.icon}
                img={data.img}
                name={data.name}
                description={data.description}
                institution={data.institution}
                conclusion={data.conclusion}
                duration={data.duration}
                link_institution={data.link_institution}
                link_credential={data.link_credential}
                style_icone={data.style_icone}
                status={data.status}
              />
            </div>
              
          ))}
            
        </div>
      </div>
      <div 
        className={`trasparentCards ${moreCardsBool ? 'trasparentCards-viewMore-true': 'trasparentCards-viewMore-false'}`}
      >
        <div className='btn-container-transparentCards'>

          {!moreCardsBool &&
          
            <Button
              handleClick={handleClickBtnMoreCardsBool}
              name='Ver mais'
              icon={'expand_more'}
              icon_style={{fontWeight: '400', marginBottom: '-2px', fontSize: '1.5em'}}
              btn_style={{
                paddingLeft: '30px',
                paddingRight: '40px',
                border: '2px solid #d6d6d6'
              }}
            />
          }

          {moreCardsBool &&
            <Link
            to={'id_certifications'}
            smooth={true} offset={-79}
            duration={300}>
          
                <Button
                  handleClick={handleClickBtnLessCardsBool}
                  name='Ver menos'
                  icon={'expand_less'}
                  btn_style={{paddingLeft: '30px', paddingRight: '40px', border: '2px solid #d6d6d6'}}
                  icon_style={{fontWeight: '400', marginBottom: '-2px', fontSize: '1.5em'}}
                />

            </Link>
          }
        </div>
      </div> 
    </div>
  );
}