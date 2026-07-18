export default function MiniCardExp({ logo, institution, description, position, date }) {
  return (
    <article className='w-full overflow-hidden rounded-2xl border border-outline bg-panel shadow-panel transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary-soft hover:shadow-float'>
      <div className='flex gap-4 px-5 py-5 min-[500px]:pl-5'>
        <div className='flex min-w-0 flex-1 flex-col gap-[5px]'>
          <span className='text-sm font-medium text-copy-muted'>
            {date}
          </span>
          <span className='text-[1.12rem] font-semibold leading-snug text-copy-strong'>
            {institution}
          </span>
          <p className='mt-2 text-[0.98rem] leading-relaxed text-copy'>
            {description}
          </p>
        </div>
        <div className='hidden shrink-0 pl-2 min-[500px]:flex min-[500px]:items-start'>
          <div className='flex size-[76px] items-center justify-center rounded-2xl border border-outline bg-panel-soft p-3'>
            <img className='max-h-full w-full object-contain' src={logo} alt={`Logo de ${institution}`} />
          </div>
        </div>
      </div>
      <div className='flex min-h-11 items-center border-t border-outline-muted bg-panel-muted/60 px-5'>
        <span className='text-sm font-semibold leading-none text-primary'>{position}</span>
      </div>
    </article>
  )
}
