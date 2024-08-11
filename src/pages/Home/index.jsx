import { Link } from 'react-scroll';
import SocialsGroup from '../../components/SocialsGroup';
import './styles.css';
import { useMediaQuery } from 'react-responsive';

export default function Home() {

  const mobileOrTablet = useMediaQuery({query: '(max-width: 661px)'});

  return (
    <div id='id_home' className='home-container defaultHome'>

      <div className='home-content'>

        {!mobileOrTablet &&
          <h1>Desenvolvedor <span id='title-style-highlight'>Fullstack</span></h1>
        
        }

        {mobileOrTablet &&
          <div className='mobile-title-home-container'>
            <h1>Desenvolvedor</h1>
            <h1 id='title-style-highlight'>Fullstack</h1>
          </div>
        }


        <p>
          Seja bem-vindo ao meu espaço virtual, onde compartilho minhas experiências, projetos e as mais recentes descobertas no mundo da tecnologia.
        </p>

        <SocialsGroup/>
      </div>

      <Link to='id_certifications' smooth={true} offset={-79} className='Link-skills'>
        <span className="material-symbols-outlined arrow-scrollPageDown-home">
          keyboard_arrow_down
        </span>
      </Link>

    </div>
  )
}