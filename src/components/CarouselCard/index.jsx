export default function CarouselCard({ img, link, github, name, stacks }) {
  const actionClassName = 'inline-flex h-10 min-w-[112px] items-center justify-center rounded-full border border-outline bg-app-alt px-4 text-[0.88rem] font-semibold text-copy transition-all duration-200 ease-out hover:border-primary-soft hover:bg-primary-surface focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft';

  return (
    <article className='group flex h-full w-full max-w-[300px] flex-col overflow-hidden rounded-[24px] border border-outline/70 bg-panel p-3 shadow-[0_18px_38px_-26px_var(--color-shadow-lg)] transition-all duration-300 ease-[var(--ease-fluid)] hover:-translate-y-1 hover:border-primary-soft hover:shadow-[0_26px_54px_-30px_var(--color-shadow-lg)] min-[420px]:max-w-[330px] min-[560px]:max-w-[350px] min-[691px]:max-w-none'>
      <div className='relative overflow-hidden rounded-[18px] border border-outline/60 bg-panel-muted'>
        <img
          className='aspect-[16/10] h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]'
          src={img}
          alt={`Prévia do projeto ${name}`}
        />
      </div>

      <div className='flex flex-1 flex-col gap-4 px-1 pb-1 pt-4'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-[1.08rem] font-semibold leading-snug tracking-[-0.02em] text-copy-strong min-[500px]:text-[1.15rem]'>
            {name}
          </h2>

          {stacks?.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {stacks.map((logo, index) => (
                <div
                  key={`${name}-stack-${index}`}
                  className='flex h-9 w-9 items-center justify-center rounded-xl border border-outline/70 bg-app-alt p-1.5 shadow-[0_8px_18px_-18px_var(--color-shadow-lg)]'
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
              className={actionClassName}
              href={link}
              target='_blank'
              rel='noreferrer'
            >
              Ver projeto
            </a>
          )}

          {github && (
            <a
              className={actionClassName}
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
