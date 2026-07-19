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
    <article className='group relative w-full max-w-none overflow-hidden rounded-[24px] border border-outline/70 bg-panel/80 shadow-[0_18px_36px_-30px_var(--color-shadow-md)] backdrop-blur-sm transition-all duration-300 ease-[var(--ease-fluid)] hover:-translate-y-0.5 hover:border-primary-soft hover:shadow-[0_22px_42px_-30px_var(--color-shadow-lg)] min-[1080px]:max-w-[26.75rem] min-[1260px]:max-w-[27.75rem]'>
      <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(251,84,78,0.28),transparent)]' />

      <div className='flex flex-col gap-3.5 px-4 py-4 min-[500px]:gap-4 min-[500px]:px-5 min-[500px]:py-5 min-[720px]:px-[1.375rem] min-[720px]:py-[1.375rem]'>
        <div className='flex items-start gap-3 min-[560px]:gap-3.5'>
          <div className='min-w-0 flex-1'>
            <div className='flex flex-wrap items-center gap-1.5 min-[500px]:gap-2'>
              <span className='inline-flex w-fit rounded-full border border-outline/70 bg-panel/84 px-2.5 py-1 text-[0.69rem] font-medium text-copy-muted shadow-[0_12px_24px_-22px_var(--color-shadow-md)] backdrop-blur-sm min-[500px]:px-3 min-[500px]:text-[0.75rem]'>
                {date}
              </span>
              <span className='inline-flex w-fit rounded-full border border-primary/18 bg-primary/10 px-2.5 py-1 text-[0.68rem] font-medium text-primary min-[500px]:text-[0.74rem]'>
                {typeLabel}
              </span>
            </div>

            <h3 className='mt-2 text-[0.98rem] font-semibold leading-snug tracking-[-0.03em] text-copy-strong min-[500px]:text-[1.06rem] min-[720px]:text-[1.16rem]'>
              {institution}
            </h3>

            <p className='mt-2 max-w-[27rem] text-[0.84rem] leading-[1.56] text-copy min-[500px]:text-[0.9rem] min-[500px]:leading-[1.6]'>
              {description}
            </p>
          </div>

          <div className='shrink-0'>
            <div className='flex size-[62px] items-center justify-center rounded-[16px] bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel-muted))] p-1.5 ring-1 ring-outline/55 min-[500px]:size-[72px] min-[720px]:size-[78px]'>
              {logo ? (
                <div
                  className={`flex size-full items-center justify-center rounded-[13px] border border-black/5 bg-white px-1.5 py-1.5 shadow-[0_10px_20px_-16px_rgba(15,23,42,0.45)] ${logoSurfaceClassName}`.trim()}
                >
                  <img
                    className={`object-contain ${logoClassName || 'w-[58px]'}`.trim()}
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
          <div className='flex flex-wrap gap-1.5 min-[500px]:gap-2'>
            {technologies.slice(0, 4).map((technology) => (
              <span
                key={technology}
                className='inline-flex rounded-full border border-outline/65 bg-app-alt/88 px-2.5 py-1 text-[0.68rem] font-medium text-copy-muted min-[500px]:px-3 min-[500px]:text-[0.74rem]'
              >
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className='flex min-h-10 items-center border-t border-outline/65 bg-panel/76 px-4 py-2 min-[500px]:min-h-11 min-[500px]:px-5 min-[720px]:px-[1.375rem]'>
        <span className='text-[0.8rem] font-semibold leading-snug tracking-[-0.01em] text-primary min-[500px]:text-[0.86rem]'>
          {position}
        </span>
      </div>
    </article>
  );
}
