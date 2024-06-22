import './styles.css';


export default function ScreenTransparentBtn({ styles={}, link, stacks=[] }) {

  return (
    <div 
      className='screenTransparentTabletBtn'
      style={styles}
    >
      <a href={link} target='_blank'><button>Site</button></a>
      <a href={link} target='_blank'><button>GitHub</button></a>
      <div className='technologies'>

        {stacks.map((logo, index) => <img key={index} src={logo} alt="" />)}

      </div>
    </div>
  )
}

