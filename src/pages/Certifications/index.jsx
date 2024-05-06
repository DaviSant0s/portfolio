import CardCertification from '../../components/CardCertification';
import javascript from '../../assets/javascript.png';
import python from '../../assets/python.png';
import visualg from '../../assets/visualg.png';
import github from '../../assets/github1.webp';
import sql from '../../assets/database.png';
import node from '../../assets/node2.png';
import { useRef, useState } from 'react';
import Button from '../../components/Button';
import { Link } from 'react-scroll';
import './styles.css';

const DataCertifications = [
  {
    id: -2,
    status: false,
    name: 'Banco de Dados e SQL',
    icon: "bx bxl-javascript",
    img: sql,
    description: 'Business Intelligence, SQL Server, MySQL, Oracle, T-SQL e PLSQL',
    institution: 'Udemy',
    conclusion: '2024',
    duration: '58,5 horas',
    link_institution: 'https://www.udemy.com/course/bancos-de-dados-relacionais-basico-avancado/?couponCode=KEEPLEARNING',
    style_icone: {width: '40px', height: '40px'},
  },
  {
    id: -1,
    status: false,
    name: 'Node.js',
    icon: "",
    img: node,
    description: 'Node.js do zero a Maestria com diversos Projetos',
    institution: 'Udemy',
    conclusion: '2024',
    duration: '38 horas',
    link_institution: 'https://www.udemy.com/course/nodejs-do-zero-a-maestria-com-diversos-projetos/?couponCode=KEEPLEARNING',
    style_icone: {},
  },
  
  {
    id: 0,
    status: true,
    name: 'Javascript',
    icon: "bx bxl-javascript",
    img: javascript,
    description: 'JavaScript e TypeScript do básico ao avançado',
    institution: 'Udemy',
    conclusion: '2024',
    duration: '93 horas',
    link_institution: 'https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/?couponCode=KEEPLEARNING',
    style_icone: {width: '30px', height: '30px', border: '1px solid #c7c6bf'},
  },
  {
    id: 1,
    status: true,
    name: 'React + Next.js',
    icon: "bx bxl-react",
    img: null,
    description: 'React.Js e Next.Js (Intermediário e Avançado)',
    institution: 'Udemy',
    conclusion: '2024',
    duration: '146 horas',
    link_institution: 'https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/?couponCode=KEEPLEARNING',
    style_icone: {color: '#61DAFB', fontSize: '2.5em'},
  },
  {
    id: 2,
    status: true,
    name: 'HTML5 e CSS3',
    icon: "bx bxl-html5",
    img: null,
    description: 'Do básico ao avançado',
    institution: 'Curso em vídeo',
    conclusion: '2023',
    duration: '160 horas',
    link_institution: 'https://www.cursoemvideo.com/',
    style_icone: {color: '#DD4B25'},
  },
  {
    id: 3,
    status: true,
    name: 'Backend',
    icon: "bx bxl-nodejs",
    img: null,
    description: 'Capacitação backend com nodejs e MongoDB',
    institution: 'Télos',
    conclusion: '2024',
    duration: 'null',
    link_institution: 'https://www.telosconecta.com/en-US',
    style_icone: {color: '#7CB700'},
  },
  {
    id: 4,
    status: true,
    name: 'Python',
    icon: "bx bxl-python",
    img: python,
    description: 'Do básico ao avançado',
    institution: 'Curso em vídeo',
    conclusion: '2022',
    duration: '120 horas',
    link_institution: 'https://www.cursoemvideo.com/',
    link_credential: '',
    style_icone: {},
  },
  
  {
    id: 5,
    status: true,
    name: 'git',
    icon: "bx bxl-git",
    img: null,
    description: 'Introdução ao Git',
    institution: 'Microsoft Learn',
    conclusion: '2024',
    duration: 'null',
    link_institution: 'https://learn.microsoft.com/pt-br/training/browse/',
    link_credential: 'https://drive.google.com/file/d/1hKURT3dkYVdj1A6jdXkFCl_AMrobokFh/view',
    style_icone: {color: '#E84E31'},
  },

  {
    id: 6,
    status: true,
    name: 'git',
    icon: "bx bxl-git",
    img: null,
    description: 'Como criar e modificar um projeto Git',
    institution: 'Microsoft Learn',
    conclusion: '2024',
    duration: 'null',
    link_institution: 'https://learn.microsoft.com/pt-br/training/browse/',
    link_credential: 'https://drive.google.com/file/d/1hKw_BF0ucbKRE3nSW0l2_6UvyPsvkshb/view',
    style_icone: {color: '#E84E31'},
  },

  {
    id: 7,
    status: true,
    name: 'React',
    icon: "bx bxl-react",
    img: null,
    description: 'Programa de capacitação da Télos',
    institution: 'Télos',
    conclusion: '2023',
    duration: 'null',
    link_institution: 'https://www.telosconecta.com/en-US',
    link_credential: '',
    style_icone: {color: '#61DAFB'},
  },
  {
    id: 8,
    status: true,
    name: 'Git + GitHub',
    icon: "bx bxl-github",
    img: github,
    description: 'Programa de capacitação da Télos',
    institution: 'Télos',
    conclusion: '2023',
    duration: 'null',
    link_institution: 'https://www.telosconecta.com/en-US',
    link_credential: '',
    style_icone: {width: '45px', height: '45px'},
  },
  {
    id: 9,
    status: true,
    name: 'Wordpress',
    icon: "bx bxl-wordpress",
    img: null,
    description: 'Wordpress com gutenberg',
    institution: 'Estudonauta',
    conclusion: '2021',
    duration: '80 horas',
    link_institution: 'https://www.estudonauta.com/',
    link_credential: '',
    style_icone: {color: '#207196'},
  },
  {
    id: 10,
    status: true,
    name: 'Algoritmo + visualG',
    icon: '',
    img: visualg,
    description: 'Algoritmos e Lógica de Programação',
    institution: 'Curso em vídeo',
    conclusion: '2020',
    duration: '40 horas',
    link_institution: 'https://www.cursoemvideo.com/',
    link_credential: '',
    style_icone: {},
  }
];

export default function Certifications() {
  const Ref_page = useRef();
  const [ moreCardsBool, setMoreCardsBool ] = useState(false);

  return (
    <div ref={Ref_page} id='id-ertifications' className='certifications-container defaultPages'>
      <h1>Certificações</h1>
      <div className='certifications-content'>

        {
          DataCertifications.map((data, index) => {

            if(!moreCardsBool) {
              if(index + 1 > 9) return;
            }

            return (
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
                  pageRef={Ref_page}
                />
              </div>
            );
          })

        }
      </div>

      <div className='btn-more-certifications-cards'>
        {!moreCardsBool &&
          <Button 
            handleClick={() => setMoreCardsBool(true)} 
            name='Ver mais' 
            icon={'expand_more'} 
            btn_style={{paddingLeft: '30px', paddingRight: '40px'}}
            icon_style={{fontWeight: '400', marginBottom: '-2px', fontSize: '1.5em'}}
          />
        }

        {moreCardsBool &&

          <Link 
            to='id-ertifications' 
            smooth={true} offset={0} 
            duration={700}>
              <Button 
                handleClick={() => setMoreCardsBool(false)} 
                name='Ver menos' 
                icon={'expand_less'} 
                btn_style={{paddingLeft: '30px', paddingRight: '40px'}}
                icon_style={{fontWeight: '400', marginBottom: '-2px', fontSize: '1.5em'}}
              />
          </Link>
        }

      </div>
    </div>
  );
}


/* import git from '../../assets/git.png';
import react from '../../assets/react.svg';
import htmlCss from '../../assets/html-css.png';
import wordpress from '../../assets/wordpress.webp';
import microsoft from '../../assets/microsoft.jpeg';
import telos from '../../assets/telos.jpeg';
import nodejs from '../../assets/nodejs.png';
import git_github from '../../assets/git-github.webp'; */