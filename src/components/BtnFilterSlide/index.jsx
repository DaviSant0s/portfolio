export default function BtnFilterSlide({ children, selected, handleClick, filterName='' }) {

  const handleClickFilterSlide = () => {
    handleClick(filterName);
  }

  return (
    <button
      type='button'
      onClick={handleClickFilterSlide} 
      className={[
        'inline-flex items-center justify-center rounded-lg border px-[15px] pt-[5px] pb-[6px] text-[11.2px] font-light leading-none transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft',
        selected
          ? 'border-primary bg-primary font-normal text-copy-inverse'
          : 'border-outline bg-panel text-copy',
      ].join(' ')}
      aria-pressed={selected}
    >
      {children}
    </button>
  )
}
