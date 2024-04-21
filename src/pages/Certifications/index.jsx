import CardCertification from '../../components/CardCertification';
import git from '../../assets/git.png';
import react from '../../assets/react.svg';
import javascript from '../../assets/javascript.png';
import htmlCss from '../../assets/html-css.png';
import python from '../../assets/python.png';
import wordpress from '../../assets/wordpress.webp';
import visualg from '../../assets/visualg.png';
import microsoft from '../../assets/microsoft.jpeg';
import telos from '../../assets/telos.jpeg';
import nodejs from '../../assets/nodejs.png';
import git_github from '../../assets/git-github.webp';
import github from '../../assets/github1.webp';

import './styles.css';

export default function Certifications() {
  return (
    <div id='id-ertifications' className='certifications-container defaultPages'>
      <h1>Certificações</h1>
      <div className='certifications-content'>
        <CardCertification 
          img={javascript} 
          name={'Javascript'} 
          description={'JavaScript e TypeScript do básico ao avançado'}
          institution={'Udemy'}
          conclusion={'2024'}
          duration={'93 horas'}
          link_institution='https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/?couponCode=KEEPLEARNING'
          style_icone={{width: '30px', height: '30px', border: '1px solid #c7c6bf'}}
        />
        <CardCertification 
          img={react} 
          name={'React + Next.js'}
          description={'React.Js e Next.Js (Intermediário e Avançado)'}
          institution={'Udemy'}
          conclusion={'2024'}
          duration={'146 horas'}
          link_institution='https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/?couponCode=KEEPLEARNING'
          style_icone={{width: '60px', height: '70px'}}
        />
        <CardCertification
          img={htmlCss}
          name={'HTML5 e CSS3'}
          description={'Do básico ao avançado'}
          institution={'Curso em vídeo'}
          conclusion={'2023'}
          duration={'160 horas'}
          link_institution='https://www.cursoemvideo.com/'
          style_title={{fontSize: '1.4em'}}
        />

        <CardCertification
          img={nodejs}
          name={'Backend'}
          description={'Capacitação backend com nodejs e MongoDB'}
          institution={'Télos'}
          conclusion={'2024'}
          link_institution='https://www.telosconecta.com/en-US'
          duration={'---'}
        />

        <CardCertification
          img={python}
          name={'Python'}
          description={'Do básico ao avançado'}
          institution={'Curso em vídeo'}
          conclusion={'2022'}
          duration={'120 horas'}
          link_institution='https://www.cursoemvideo.com/'
        />
        
        <CardCertification 
          img={git} 
          name={'git'} 
          description={'Introdução ao Git'}
          institution={'Microsoft Learn'}
          conclusion={'2024'}
          duration={'---'}
          link_institution='https://learn.microsoft.com/pt-br/training/browse/'
          link_credential='https://drive.google.com/file/d/1hKURT3dkYVdj1A6jdXkFCl_AMrobokFh/view'
        />
        <CardCertification 
          img={git} 
          imgTeste={microsoft}
          name={'git'} 
          description={'Como criar e modificar um projeto Git'}
          institution={'Microsoft Learn'}
          conclusion={'2024'}
          duration={'---'}
          link_institution='https://learn.microsoft.com/pt-br/training/browse/'
          link_credential='https://drive.google.com/file/d/1hKw_BF0ucbKRE3nSW0l2_6UvyPsvkshb/view'
        />
        
        <CardCertification
          img={react}
          name={'React'}
          description={'Programa de capacitação da Télos '}
          institution={'Télos'}
          conclusion={'2023'}
          duration={'---'}
          link_institution='https://www.telosconecta.com/en-US'
          style_icone={{width: '60px', height: '70px'}}
        />

        <CardCertification
          img={github}
          name={'Git + GiHub'}
          description={'Programa de capacitação da Télos '}
          institution={'Télos'}
          conclusion={'2023'}
          duration={'---'}
          link_institution='https://www.telosconecta.com/en-US'
          style_icone={{width: '45px', height: '45px'}}
        />
        
        <CardCertification
          img={wordpress}
          name={'Wordpress'}
          description={'Wordpress com gutenberg'}
          institution={'Estudonauta'}
          conclusion={'2021'}
          duration={'80 horas'}
          link_institution='https://www.estudonauta.com/'
          style_icone={{width: '45px', height: '45px'}}
        />
        <CardCertification
          img={visualg}
          name={'Algoritmo + visualG'}
          description={'Algoritmos e Lógica de Programação'}
          institution={'Curso em vídeo'}
          conclusion={'2020'}
          duration={'40 horas'}
          link_institution='https://www.cursoemvideo.com/'
          style_icone={{width: '45px', height: '45px'}}
        />
        
        

        
      </div>
    </div>
  )
}
