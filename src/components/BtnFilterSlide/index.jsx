import './styles.css';

export default function BtnFilterSlide({ children, selected, handleClick, filterName='', fontSize }) {

  const handleClickFilterSlide = () => {
    handleClick(filterName);
  }

  return (
    <div 
      onClick={handleClickFilterSlide} 
      className={`btnFilterSlide-container ${selected ? 'selectedMobile' : ''}`}
      style={{fontSize: `${fontSize}px`}}>
      {children}
    </div>
  )
}
