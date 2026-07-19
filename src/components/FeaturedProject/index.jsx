import { experiences } from '../../data/experiences';

const featuredProject = experiences.find(({ id }) => id === 'lep-claria-task');

export default function FeaturedProject() {
  if (!featuredProject) {
    return null;
  }

  const {
    institution,
    projectUrl,
    projectName = 'Projeto em destaque',
    projectPreview,
    projectSummary,
    projectHighlights = [],
  } = featuredProject;

  return (
    <article className='relative w-full overflow-hidden rounded-[32px] border border-outline/70 bg-panel/80 shadow-[0_24px_48px_-34px_var(--color-shadow-md)] backdrop-blur-sm'>
      <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(251,84,78,0.42),transparent)]' />
      <div className='pointer-events-none absolute -left-16 bottom-[-7rem] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,rgba(2,112,173,0.13),transparent_72%)] blur-3xl' />
      <div className='pointer-events-none absolute -right-16 top-[-7rem] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,rgba(251,84,78,0.14),transparent_70%)] blur-3xl' />

      <div className='relative grid gap-5 px-4 py-4 min-[500px]:px-5 min-[500px]:py-5 min-[720px]:gap-6 min-[720px]:px-6 min-[720px]:py-6 min-[920px]:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] min-[920px]:items-center'>
        <div className='order-2 flex min-w-0 flex-col gap-4 min-[720px]:gap-5 min-[920px]:order-1'>
          <div className='flex flex-wrap items-center gap-2.5'>
            <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft/60 px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-primary min-[500px]:text-[0.76rem]'>
              <span className='size-2 rounded-full bg-primary' />
              Projeto em destaque
            </span>
          </div>

          <div className='flex flex-col gap-3'>
            <span className='text-[0.78rem] font-medium uppercase tracking-[0.2em] text-copy-soft min-[500px]:text-[0.82rem]'>
              {institution}
            </span>

            <div className='space-y-3'>
              <h3 className='max-w-[12ch] text-balance text-[clamp(1.7rem,4vw,2.8rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-copy-strong'>
                {projectName}
              </h3>
              <p className='max-w-[36rem] text-[0.95rem] leading-[1.68] text-copy-muted min-[500px]:text-[1rem]'>
                {projectSummary}
              </p>
            </div>
          </div>

          <div className='flex flex-wrap gap-2.5'>
            {projectHighlights.map((badge) => (
              <span
                key={badge}
                className='inline-flex rounded-full border border-outline/70 bg-panel/72 px-3 py-2 text-[0.82rem] font-medium tracking-[-0.01em] text-copy-muted'
              >
                {badge}
              </span>
            ))}
          </div>

          {projectUrl ? (
            <div className='flex flex-wrap items-center gap-3'>
              <a
                href={projectUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#15181d] px-5 text-[0.95rem] font-semibold tracking-[-0.02em] text-white shadow-[0_18px_34px_-24px_rgba(21,24,29,0.52)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#0f1115] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft dark:bg-white dark:text-[#12161d] dark:shadow-[0_18px_34px_-24px_rgba(0,0,0,0.34)] dark:hover:bg-[#f4f7fa]'
              >
                <span>Abrir projeto</span>
                <span className='material-symbols-outlined text-[1rem] leading-none'>
                  north_east
                </span>
              </a>
            </div>
          ) : null}
        </div>

        <div className='order-1 overflow-hidden rounded-[28px] border border-outline/70 bg-panel-muted/36 shadow-[0_22px_44px_-30px_var(--color-shadow-md)] min-[920px]:order-2'>
          <div className='relative aspect-[16/10] w-full overflow-hidden bg-panel-muted/40'>
            {projectPreview ? (
              <img
                src={projectPreview}
                alt={`Tela do projeto ${projectName}`}
                className='h-full w-full object-cover object-top'
              />
            ) : null}

            <div className='pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent,rgba(8,12,18,0.08))]' />
          </div>
        </div>
      </div>
    </article>
  )
}
