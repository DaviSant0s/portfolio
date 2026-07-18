export default function MiniCardExp({ logo, logoClassName, institution, description, position, date }) {
  return (
    <article className='w-full max-w-[690px] overflow-hidden rounded-3xl border border-outline/70 bg-panel-muted shadow-[0_18px_42px_-30px_var(--color-shadow-md)] transition-all duration-300 ease-[var(--ease-fluid)] hover:-translate-y-0.5 hover:border-primary-soft hover:shadow-[0_24px_54px_-34px_var(--color-shadow-lg)] max-[640px]:max-w-none'>
      <div className='flex items-start gap-5 px-6 py-7 min-[720px]:gap-7 min-[720px]:px-7 min-[720px]:py-8'>
        <div className='flex min-w-0 flex-1 flex-col gap-[5px]'>
          <span className='inline-flex w-fit rounded-full border border-outline/70 bg-panel-soft px-3 py-1 text-[0.82rem] font-medium text-copy-muted shadow-[0_1px_2px_var(--color-shadow-soft)]'>
            {date}
          </span>
          <h3 className='mt-3 text-[1.12rem] font-semibold leading-snug tracking-[-0.02em] text-copy-strong min-[720px]:text-[1.28rem]'>
            {institution}
          </h3>
          <p className='mt-2 max-w-[35rem] text-[0.98rem] leading-[1.64] text-copy'>
            {description}
          </p>
        </div>
        <div className='hidden shrink-0 min-[560px]:flex'>
          <div className='shadow-surface-glint flex min-h-[92px] min-w-[92px] items-start justify-center rounded-[22px] bg-panel px-4 py-3 ring-1 ring-outline/55'>
            <img className={`object-contain ${logoClassName || 'w-[82px]'}`} src={logo} alt={`Logo de ${institution}`} />
          </div>
        </div>
      </div>
      <div className='flex min-h-14 items-center border-t border-outline/65 bg-panel/70 px-6 min-[720px]:px-7'>
        <span className='text-[0.94rem] font-semibold leading-none tracking-[-0.01em] text-primary'>{position}</span>
      </div>
    </article>
  )
}
