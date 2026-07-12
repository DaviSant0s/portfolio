import './styles.css';

export default function ArrowSlide({ direction='right', func_handle,  style={}}) {
  return (
    <div style={style} className='arrowSlide-container'>

      {direction === 'left' &&
        <button
          type="button"
          onClick={func_handle}
          aria-label="Ver projetos anteriores"
          className="arrowSlide arrowSlide_left"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
      }

      {direction === 'right' &&
        <button
          type="button"
          onClick={func_handle}
          aria-label="Ver próximos projetos"
          className="arrowSlide arrowSlide_right"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      }

    </div>
  )
}
