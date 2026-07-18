export default function BtnFilterSlide({ children, selected, handleClick, filterName='' }) {

  const handleClickFilterSlide = () => {
    handleClick(filterName);
  }

  return (
    <button
      type='button'
      onClick={handleClickFilterSlide} 
      className={[
        'inline-flex min-h-10 items-center justify-center rounded-full border px-4 py-2 text-[0.8rem] font-medium leading-none tracking-[-0.01em] transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft',
        selected
          ? 'border-primary bg-primary text-copy-inverse shadow-[0_10px_20px_-16px_var(--color-shadow-lg)]'
          : 'border-outline bg-panel text-copy hover:border-outline-strong hover:bg-panel-muted',
      ].join(' ')}
      aria-pressed={selected}
    >
      {children}
    </button>
  )
}
