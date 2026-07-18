export default function MiniCardExp({
  logo,
  logoClassName,
  logoSurfaceClassName = '',
  logoFallback = '',
  institution,
  description,
  position,
  date
}) {
  return (
    <article className='w-full max-w-[760px] overflow-hidden rounded-[30px] border border-outline/70 bg-panel/78 shadow-[0_22px_48px_-32px_var(--color-shadow-md)] backdrop-blur-sm transition-all duration-300 ease-[var(--ease-fluid)] hover:-translate-y-0.5 hover:border-primary-soft hover:shadow-[0_28px_56px_-34px_var(--color-shadow-lg)] max-[640px]:max-w-none'>
      <div className='flex items-start gap-4 px-5 py-5 min-[500px]:gap-5 min-[500px]:px-6 min-[500px]:py-6 min-[720px]:gap-7 min-[720px]:px-7 min-[720px]:py-8'>
        <div className='flex min-w-0 flex-1 flex-col gap-[5px]'>
          <span className='inline-flex w-fit rounded-full border border-outline/70 bg-panel/82 px-3.5 py-1.5 text-[0.76rem] font-medium text-copy-muted shadow-[0_12px_26px_-22px_var(--color-shadow-md)] backdrop-blur-sm min-[500px]:text-[0.82rem]'>
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
          <div className='flex min-h-[88px] min-w-[88px] items-center justify-center rounded-[22px] bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel-muted))] p-2.5 ring-1 ring-outline/55'>
            {logo ? (
              <div
                className={`flex min-h-[64px] min-w-[64px] items-center justify-center rounded-[16px] border border-black/5 bg-white px-2.5 py-2.5 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.45)] ${logoSurfaceClassName}`.trim()}
              >
                <img
                  className={`object-contain ${logoClassName || 'w-[82px]'}`.trim()}
                  src={logo}
                  alt={`Logo de ${institution}`}
                />
              </div>
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
      <div className='flex min-h-12 items-center border-t border-outline/65 bg-panel/78 px-5 min-[500px]:min-h-14 min-[500px]:px-6 min-[720px]:px-7'>
        <span className='text-[0.88rem] font-semibold leading-none tracking-[-0.01em] text-primary min-[500px]:text-[0.94rem]'>{position}</span>
      </div>
    </article>
  )
}
