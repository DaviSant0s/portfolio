import './styles.css';

export default function ArrowSlide({ direction='right', func_handle,  style={}}) {
  return (
    <div style={style} className='arrowSlide-container'>

      {direction === 'left' &&
        <span onClick={func_handle} className="material-symbols-outlined arrowSlide arrowSlide_left">
          chevron_left
        </span>
      }

      {direction === 'right' &&
        <span onClick={func_handle} className="material-symbols-outlined arrowSlide arrowSlide_right">
          chevron_right
        </span>
      }

    </div>
  )
}
