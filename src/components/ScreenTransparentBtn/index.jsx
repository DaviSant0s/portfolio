import './styles.css';

export default function ScreenTransparentBtn({ styles={}, link }) {

  return (
    <div 
      className='screenTransparentTabletBtn'
      style={styles}
    >
      <a href={link} target='_blank'><button>Visualizar</button></a>
    </div>
  )
}

