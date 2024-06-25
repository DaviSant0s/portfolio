import './styles.css';

export default function ScreenTransparentBtn({ styles={}, link, github, name, stacks=[] }) {

  return (
    <div 
      className='screenTransparentTabletBtn'
      style={styles}
    >
      <h1>{name}</h1>
      {link && 
        <a href={link} target='_blank'><button>Site</button></a>
      }

      {github &&
        <a href={github} target='_blank'><button>GitHub</button></a>
      }
      <div className='technologies-container'>


        {stacks.map((logo, index) => (

          <div key={index} className='technologies-background'>
            <img  src={logo} alt="" />
          </div>

        ))}


      </div>
    </div>
  )
}

