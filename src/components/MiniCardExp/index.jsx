export default function MiniCardExp({ logo, logoClassName, logoFallback = '', institution, description, position, date }) {
  return (
    <article className='w-full max-w-[690px] overflow-hidden rounded-3xl border border-outline/70 bg-panel-muted shadow-[0_18px_42px_-30px_var(--color-shadow-md)] transition-all duration-300 ease-[var(--ease-fluid)] hover:-translate-y-0.5 hover:border-primary-soft hover:shadow-[0_24px_54px_-34px_var(--color-shadow-lg)] max-[640px]:max-w-none'>
      <div className='flex items-start gap-4 px-5 py-5 min-[500px]:gap-5 min-[500px]:px-6 min-[500px]:py-6 min-[720px]:gap-7 min-[720px]:px-7 min-[720px]:py-8'>
        <div className='flex min-w-0 flex-1 flex-col gap-[5px]'>
          <span className='inline-flex w-fit rounded-full border border-outline/70 bg-panel-soft px-3 py-1 text-[0.76rem] font-medium text-copy-muted shadow-[0_1px_2px_var(--color-shadow-soft)] min-[500px]:text-[0.82rem]'>
            {date}
          </span>
          <h3 className='mt-2.5 text-[1.03rem] font-semibold leading-snug tracking-[-0.02em] text-copy-strong min-[500px]:mt-3 min-[500px]:text-[1.12rem] min-[720px]:text-[1.28rem]'>
            {institution}
          </h3>
          <p className='mt-1.5 max-w-[35rem] text-[0.92rem] leading-[1.58] text-copy min-[500px]:mt-2 min-[500px]:text-[0.98rem] min-[500px]:leading-[1.64]'>
            {description}
          </p>
        </div>
        <div className='hidden shrink-0 min-[560px]:flex'>
          <div className='shadow-surface-glint flex min-h-[92px] min-w-[92px] items-start justify-center rounded-[22px] bg-panel px-4 py-3 ring-1 ring-outline/55'>
            {logo ? (
              <img className={`object-contain ${logoClassName || 'w-[82px]'}`} src={logo} alt={`Logo de ${institution}`} />
            ) : (
              <div className='flex size-full items-center justify-center rounded-[16px] bg-primary/10 px-2 text-center'>
                <span className='text-[1rem] font-bold tracking-[0.08em] text-primary'>
                  {logoFallback}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='flex min-h-12 items-center border-t border-outline/65 bg-panel/70 px-5 min-[500px]:min-h-14 min-[500px]:px-6 min-[720px]:px-7'>
        <span className='text-[0.88rem] font-semibold leading-none tracking-[-0.01em] text-primary min-[500px]:text-[0.94rem]'>{position}</span>
      </div>
    </article>
  )
}
