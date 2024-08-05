import { Link } from 'react-scroll';
import SocialsGroup from '../../components/SocialsGroup';
import './styles.css';
import { useMediaQuery } from 'react-responsive';

export default function Home() {

  const mobileOrTablet = useMediaQuery({query: '(max-width: 661px)'});
  const mobile = useMediaQuery({query: '(max-width: 535px)'});

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
          Meu nome é <strong>Davi Santos</strong>, tenho 24 anos, sou uma pessoa 
          bastante dedicada aos estudos, focado e sempre aprendendo 
          coisas novas relacionadas à programação, engenharia e desenvolvimento pessoal. 
        </p>

       {!mobile &&

          <p>
            Estou sempre buscando novos aprendizados  e desafios para crescer profissionalmente, assim, estando em constante evolução.
          </p>
        
        }


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