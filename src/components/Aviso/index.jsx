import { useMediaQuery } from 'react-responsive';
import './styles.css';

export default function Aviso() {

  const miniMobile = useMediaQuery({query: '(max-width: 520px)'});


  return (
    <div className='warning-container'>
      
      {miniMobile &&
        <p>🚧 Site ainda em construção, fique à vontade!</p>
      }

      {!miniMobile &&
        <p>🚧 Site ainda em construção, fique à vontade para explorar o que já está no ar!</p>
      }
      
    </div>
  )
}
