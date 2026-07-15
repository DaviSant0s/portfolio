import './styles.css';

export default function ScreenTransparentBtn({ link, github, name, stacks=[] }) {
  return (
    <div className='screenTransparentTabletBtn'>
      <h1>{name}</h1>
      {link && 
        <a
          className='project-link-btn'
          href={link}
          target='_blank'
          rel='noreferrer'
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
        >
          GitHub
        </a>

      }
      <div className='technologies-container'>


        {stacks.map((logo, index) => (

          <div key={index} className='technologies-background'>
            <img src={logo} alt="Tecnologia do projeto" />
          </div>

        ))}


      </div>
    </div>
  )
}
