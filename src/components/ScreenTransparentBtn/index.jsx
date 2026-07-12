import { useCarousel } from '../../context/CarrouselContext';
import './styles.css';

export default function ScreenTransparentBtn({ styles={}, link, github, name, stacks=[] }) {

  const {cardSize_width} = useCarousel();

  return (
    <div 
      className='screenTransparentTabletBtn'
      style={{...styles, gap: `${(Math.floor(8*cardSize_width)/287)}px`}}
    >
      <h1 style={{fontSize: `${(20.8*cardSize_width)/287}px`, marginBottom: `${(5*cardSize_width)/287}px`}}>{name}</h1>
      {link && 
        <a
          className='project-link-btn'
          href={link}
          target='_blank'
          rel='noreferrer'
          style={{fontSize: `${(13*cardSize_width)/287}px`, width: `${(130*cardSize_width)/287}px`, height: `${(28.4*cardSize_width)/287}px`}}
        >
          Site
        </a>

      }

      {github &&
        <a
          className='project-link-btn'
          href={github}
          target='_blank'
          rel='noreferrer'
          style={{fontSize: `${(13*cardSize_width)/287}px`, width: `${(130*cardSize_width)/287}px`, height: `${(28.4*cardSize_width)/287}px`}}
        >
          GitHub
        </a>

      }
      <div style={{marginTop: `${(10*cardSize_width)/287}px`}} className='technologies-container'>


        {stacks.map((logo, index) => (

          <div key={index} className='technologies-background'>
            <img style={{height: `${(20*cardSize_width)/287}px`}} src={logo} alt="Tecnologia do projeto" />
          </div>

        ))}


      </div>
    </div>
  )
}
