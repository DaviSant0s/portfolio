export default function SkillsCard({ image, name, style_image }) {
  const mergedImageStyle = {
    width: '30px',
    ...style_image,
  };

  return (
    <article className='group flex h-full flex-col items-center gap-3 rounded-2xl border border-transparent bg-transparent p-2 text-center transition-transform duration-200 ease-out hover:-translate-y-1'>
      <div className='flex h-[92px] w-full items-center justify-center rounded-2xl border border-outline bg-panel-muted shadow-soft transition-all duration-300 ease-out group-hover:border-primary-soft group-hover:bg-primary-surface group-hover:shadow-panel'>
        <div className='flex size-[72px] select-none items-center justify-center'>
          <img
            style={mergedImageStyle}
            className='max-h-[56px] object-contain'
            src={image}
            alt={name}
          />
        </div>
      </div>
      <p className='text-sm font-medium leading-tight tracking-[-0.01em] text-copy-strong'>
        {name}
      </p>
    </article>
  )
}
