import { Link } from 'react-scroll';
import SocialsGroup from '../../components/SocialsGroup';
import './styles.css';

export default function Home() {

  return (
    <div id='id_home' className='home-container defaultHome'>

      <div className='home-content'>
        <h1>Desenvolvedor <span className='title-style-highlight'>Fullstack</span></h1>

        <p>
          Meu nome é <strong>Davi Santos</strong>, tenho 24 anos, sou uma pessoa 
          bastante dedicada aos estudos, focado e sempre aprendendo 
          coisas novas relacionadas à programação, engenharia e desenvolvimento pessoal. 
        </p>

        <p>
          Estou sempre buscando novos aprendizados  e desafios para crescer profissionalmente, assim, estando em constante evolução.
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