function normalizeStacks(stacks = []) {
  return stacks.map((stackItem) => {
    if (typeof stackItem === 'string') {
      return { icon: stackItem, label: 'Tecnologia' };
    }

    return stackItem;
  });
}

export default function CarouselCard({
  img,
  name,
  badge,
  stacks = [],
  summary = '',
  imageClassName = '',
  onViewDetails,
}) {
  const normalizedStacks = normalizeStacks(stacks);
  const actionClassName = 'inline-flex h-10 w-full items-center justify-center rounded-full bg-[#15181d] px-4 text-[0.86rem] font-semibold text-white shadow-[0_14px_28px_-22px_rgba(21,24,29,0.48)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#0f1115] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft dark:bg-white dark:text-[#12161d] dark:shadow-[0_14px_28px_-22px_rgba(0,0,0,0.32)] dark:hover:bg-[#f4f7fa]';

  return (
    <article className='group flex h-full w-full flex-col overflow-hidden rounded-[24px] border border-outline/60 bg-panel/56 shadow-[0_18px_34px_-30px_var(--color-shadow-md)] transition-all duration-300 ease-[var(--ease-fluid)] hover:border-primary/30 hover:bg-panel/68 hover:shadow-[0_24px_46px_-32px_var(--color-shadow-lg)]'>
      <div className='relative w-full overflow-hidden border-b border-outline/55 bg-[linear-gradient(180deg,var(--color-panel-muted),var(--color-panel))]'>
        <div className='pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_20%,rgba(15,23,42,0.06)_100%)]' />
        <img
          className={`aspect-[16/8] h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04] ${imageClassName}`.trim()}
          src={img}
          alt={`Prévia do projeto ${name}`}
        />
      </div>

      <div className='flex flex-1 flex-col px-3.5 pb-3.5 pt-3 min-[500px]:px-4 min-[500px]:pb-4'>
        <div className='flex flex-1 flex-col gap-2.5'>
          {badge ? (
            <span className='inline-flex w-fit items-center rounded-full border border-outline/70 bg-panel/80 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-copy-soft'>
              {badge}
            </span>
          ) : null}

          <h3 className='min-h-[2.7rem] text-[1rem] font-semibold leading-snug tracking-[-0.03em] text-copy-strong line-clamp-2 min-[500px]:text-[1.1rem]'>
            {name}
          </h3>

          <p className='min-h-[4.55rem] text-[0.82rem] leading-[1.5] text-copy-muted line-clamp-3 min-[500px]:text-[0.88rem]'>
            {summary}
          </p>

          {normalizedStacks.length > 0 && (
            <div className='flex min-h-9 flex-wrap gap-2 pt-0.5'>
              {normalizedStacks.map((stack, index) => (
                <div
                  key={`${name}-stack-${stack.label}-${index}`}
                  className='group/stack relative flex h-8 w-8 items-center justify-center rounded-[0.9rem] border border-outline/65 bg-panel/84 p-1.5 shadow-[0_10px_18px_-16px_var(--color-shadow-lg)]'
                  aria-label={stack.label}
                  title={stack.label}
                >
                  <img
                    className='max-h-full max-w-full object-contain'
                    src={stack.icon}
                    alt={stack.label}
                  />
                  <span className='pointer-events-none absolute bottom-full left-1/2 z-[2] mb-2 -translate-x-1/2 translate-y-1 rounded-full border border-outline/70 bg-panel px-2 py-1 text-[0.65rem] font-medium leading-none text-copy-muted opacity-0 shadow-[0_12px_24px_-20px_var(--color-shadow-md)] transition-all duration-200 ease-out group-hover/stack:translate-y-0 group-hover/stack:opacity-100'>
                    {stack.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='mt-auto pt-3'>
          <button
            type='button'
            className={actionClassName}
            onClick={onViewDetails}
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </article>
  );
}
