import CardCertification from '../../components/CardCertification';
import git from '../../assets/git.png';
import react from '../../assets/react.svg';
import javascript from '../../assets/javascript.png';
import htmlCss from '../../assets/html-css.png';
import python from '../../assets/python.png';
import wordpress from '../../assets/wordpress.webp';

import './styles.css';

export default function Certifications() {
  return (
    <div className='certifications-container defaultPages'>
      <h1>Licenças e certificados</h1>
      <div className='certifications-content'>
        <CardCertification 
          img={git} 
          name={'git'} 
          description={'Introdução ao Git'}
          institution={'Microsoft Learn'}
          conclusion={'2024'}
          duration={'---'}
        />
        <CardCertification 
          img={git} 
          name={'git'} 
          description={'Como criar e modificar um projeto Git'}
          institution={'Microsoft Learn'}
          conclusion={'2024'}
          duration={'---'}
        />
        <CardCertification 
          img={react} 
          name={'React'}
          description={'React.Js e Next.Js (Intermediário e Avançado)'}
          institution={'Udemy'}
          conclusion={'2024'}
          duration={'146 horas'}
          style_icone={{width: '60px', height: '70px'}}
        />
        <CardCertification 
          img={javascript} 
          name={'JavaScript'} 
          description={'JavaScript e TypeScript do básico ao avançado'}
          institution={'Udemy'}
          conclusion={'2024'}
          duration={'93 horas'}
          style_icone={{width: '30px', height: '30px', border: '1px solid #c7c6bf'}}
        />

        <CardCertification
          img={htmlCss}
          name={'HTML5 e CSS3'}
          description={'Do básico ao avançado'}
          institution={'Curso em vídeo'}
          conclusion={'2023'}
          duration={'160 horas'}
          style_title={{fontSize: '1.4em'}}
        />
        <CardCertification
          img={python}
          name={'Python'}
          description={'Do básico ao avançado'}
          institution={'Curso em vídeo'}
          conclusion={'2022'}
          duration={'120 horas'}
        />
        <CardCertification
          img={wordpress}
          name={'Wordpress'}
          description={'Wordpress com gutenberg'}
          institution={'Estudonauta'}
          conclusion={'2021'}
          duration={'80 horas'}
          style_icone={{width: '45px', height: '45px'}}
        />
      </div>
    </div>
  )
}
