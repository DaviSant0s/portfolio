export default function MiniCardExp({
  logo,
  logoClassName,
  logoSurfaceClassName = '',
  logoFallback = '',
  institution,
  description,
  position,
  date,
  typeLabel,
  technologies = [],
}) {
  return (
    <article className='group relative w-full max-w-none overflow-hidden rounded-[28px] border border-outline/70 bg-panel/80 shadow-[0_22px_48px_-32px_var(--color-shadow-md)] backdrop-blur-sm transition-all duration-300 ease-[var(--ease-fluid)] hover:-translate-y-0.5 hover:border-primary-soft hover:shadow-[0_28px_56px_-34px_var(--color-shadow-lg)] min-[1080px]:max-w-[31rem] min-[1260px]:max-w-[33rem]'>
      <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(251,84,78,0.28),transparent)]' />

      <div className='flex flex-col gap-5 px-5 py-5 min-[500px]:gap-6 min-[500px]:px-6 min-[500px]:py-6 min-[720px]:px-7 min-[720px]:py-7'>
        <div className='flex items-start gap-4 min-[560px]:gap-5'>
          <div className='min-w-0 flex-1'>
            <div className='flex flex-wrap items-center gap-2'>
              <span className='inline-flex w-fit rounded-full border border-outline/70 bg-panel/84 px-3.5 py-1.5 text-[0.74rem] font-medium text-copy-muted shadow-[0_12px_26px_-22px_var(--color-shadow-md)] backdrop-blur-sm min-[500px]:text-[0.8rem]'>
                {date}
              </span>
              <span className='inline-flex w-fit rounded-full border border-primary/18 bg-primary/10 px-3 py-1.5 text-[0.72rem] font-medium text-primary min-[500px]:text-[0.78rem]'>
                {typeLabel}
              </span>
            </div>

            <h3 className='mt-3 text-[1.03rem] font-semibold leading-snug tracking-[-0.03em] text-copy-strong min-[500px]:text-[1.16rem] min-[720px]:text-[1.32rem]'>
              {institution}
            </h3>

            <p className='mt-3 max-w-[34rem] text-[0.92rem] leading-[1.68] text-copy min-[500px]:text-[0.98rem] min-[500px]:leading-[1.74]'>
              {description}
            </p>
          </div>

          <div className='shrink-0'>
            <div className='flex size-[76px] items-center justify-center rounded-[20px] bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel-muted))] p-2.5 ring-1 ring-outline/55 min-[500px]:size-[88px] min-[720px]:size-[96px]'>
              {logo ? (
                <div
                  className={`flex size-full items-center justify-center rounded-[16px] border border-black/5 bg-white px-2.5 py-2.5 shadow-[0_12px_24px_-18px_rgba(15,23,42,0.45)] ${logoSurfaceClassName}`.trim()}
                >
                  <img
                    className={`object-contain ${logoClassName || 'w-[76px]'}`.trim()}
                    src={logo}
                    alt={`Logo de ${institution}`}
                  />
                </div>
              ) : (
                <div className='flex size-full items-center justify-center rounded-[16px] bg-primary/10 px-2 text-center'>
                  <span className='text-[0.98rem] font-bold tracking-[0.08em] text-primary'>
                    {logoFallback}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {technologies.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            {technologies.slice(0, 5).map((technology) => (
              <span
                key={technology}
                className='inline-flex rounded-full border border-outline/65 bg-app-alt/88 px-2.5 py-1 text-[0.72rem] font-medium text-copy-muted min-[500px]:px-3 min-[500px]:text-[0.77rem]'
              >
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className='flex min-h-12 items-center border-t border-outline/65 bg-panel/76 px-5 py-3 min-[500px]:min-h-14 min-[500px]:px-6 min-[720px]:px-7'>
        <span className='text-[0.88rem] font-semibold leading-snug tracking-[-0.01em] text-primary min-[500px]:text-[0.94rem]'>
          {position}
        </span>
      </div>
    </article>
  );
}
