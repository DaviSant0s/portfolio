export default function CarouselCard({ img, link, github, name, stacks }) {
  const secondaryActionClassName = 'inline-flex h-10 min-w-[112px] items-center justify-center rounded-full border border-outline/70 bg-panel/84 px-4 text-[0.88rem] font-semibold text-copy-strong shadow-[0_16px_30px_-24px_var(--color-shadow-md)] backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-copy-soft hover:bg-panel focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft';
  const primaryActionClassName = 'inline-flex h-10 min-w-[112px] items-center justify-center rounded-full bg-[#15181d] px-4 text-[0.88rem] font-semibold text-white shadow-[0_18px_34px_-24px_rgba(21,24,29,0.52)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#0f1115] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft dark:bg-white dark:text-[#12161d] dark:shadow-[0_18px_34px_-24px_rgba(0,0,0,0.34)] dark:hover:bg-[#f4f7fa]';

  return (
    <article className='group flex h-full w-full max-w-[300px] flex-col overflow-hidden rounded-[28px] border border-outline/70 bg-[linear-gradient(180deg,var(--color-panel)_0%,var(--color-panel-muted)_100%)] p-3.5 shadow-[0_22px_46px_-30px_var(--color-shadow-md)] transition-all duration-300 ease-[var(--ease-fluid)] hover:-translate-y-1 hover:border-primary-soft hover:shadow-[0_30px_56px_-30px_var(--color-shadow-lg)] min-[420px]:max-w-[330px] min-[560px]:max-w-[350px] min-[691px]:max-w-none min-[691px]:p-4'>
      <div className='relative overflow-hidden rounded-[22px] border border-outline/60 bg-panel-muted'>
        <div className='pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_35%,rgba(15,23,42,0.08)_100%)]' />
        <img
          className='aspect-[16/10] h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]'
          src={img}
          alt={`Prévia do projeto ${name}`}
        />
      </div>

      <div className='flex flex-1 flex-col gap-4 px-1 pb-1 pt-4'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-[1.08rem] font-semibold leading-snug tracking-[-0.03em] text-copy-strong min-[500px]:text-[1.18rem]'>
            {name}
          </h2>

          {stacks?.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {stacks.map((logo, index) => (
                <div
                  key={`${name}-stack-${index}`}
                  className='flex h-9 w-9 items-center justify-center rounded-xl border border-outline/70 bg-panel/88 p-1.5 shadow-[0_10px_20px_-18px_var(--color-shadow-lg)]'
                >
                  <img
                    className='max-h-full max-w-full object-contain'
                    src={logo}
                    alt='Tecnologia do projeto'
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='mt-auto flex flex-wrap gap-2.5 pt-1'>
          {link && (
            <a
              className={primaryActionClassName}
              href={link}
              target='_blank'
              rel='noreferrer'
            >
              Ver projeto
            </a>
          )}

          {github && (
            <a
              className={secondaryActionClassName}
              href={github}
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
