import './styles.css';

export default function BtnFilterSlide({ children, selected, handleClick, filterName='' }) {

  const handleClickFilterSlide = () => {
    handleClick(filterName);
  }

  return (
    <button
      type='button'
      onClick={handleClickFilterSlide} 
      className={`btnFilterSlide-container ${selected ? 'selectedMobile' : ''}`}
      aria-pressed={selected}
    >
      {children}
    </button>
  )
}
