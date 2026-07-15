import './styles.css';

export default function ArrowSlide({ direction='right', func_handle, disabled=false }) {
  const icon = direction === 'left' ? 'chevron_left' : 'chevron_right';
  const label = direction === 'left'
    ? 'Ver projetos anteriores'
    : 'Ver proximos projetos';

  return (
    <div className={`arrowSlide-container ${disabled ? 'is-disabled' : ''}`}>
      <button
        type="button"
        onClick={func_handle}
        aria-label={label}
        className={`arrowSlide arrowSlide_${direction}`}
        disabled={disabled}
      >
        <span className="material-symbols-outlined">{icon}</span>
      </button>
    </div>
  )
}
