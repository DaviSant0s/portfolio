import BoxIcon from '../BoxIcon';

function getInstitutionInitials(institution) {
  return institution
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export default function CardCertification({
  status = false,
  img = null,
  icon,
  name,
  institution,
  conclusion,
  duration,
  link_institution = '',
  mediaClassName = '',
  category = '',
  tags = [],
  featuredIcon = '',
}) {
  const statusLabel = status ? 'Concluído' : 'Em andamento';
  const statusClassName = status
    ? 'border-[rgba(92,184,92,0.24)] bg-[rgba(92,184,92,0.12)] text-state-success-strong dark:border-[rgba(120,212,120,0.22)] dark:bg-[rgba(120,212,120,0.12)]'
    : 'border-[rgba(185,184,92,0.24)] bg-[rgba(185,184,92,0.12)] text-[color:#8e7b2f] dark:border-[rgba(200,190,99,0.22)] dark:bg-[rgba(200,190,99,0.12)] dark:text-[color:#d6cb77]';

  const metaItems = [
    duration,
    conclusion ? `${status ? 'Concluído em' : 'Atualizado em'} ${conclusion}` : null,
  ].filter(Boolean);

  return (
    <article className='group relative flex h-full w-full flex-col overflow-hidden rounded-[26px] border border-outline/70 bg-panel/82 p-5 shadow-[0_18px_38px_-30px_var(--color-shadow-md)] backdrop-blur-sm transition-all duration-300 ease-[var(--ease-fluid)] hover:-translate-y-1 hover:border-primary-soft hover:shadow-[0_24px_48px_-32px_var(--color-shadow-lg)] min-[500px]:p-6'>
      <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(251,84,78,0.24),transparent)]' />

      <div className='flex items-start justify-between gap-3'>
        <div className='flex size-14 shrink-0 items-center justify-center rounded-[18px] border border-outline/70 bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel-muted))] p-2 shadow-[0_16px_30px_-24px_var(--color-shadow-md)] min-[500px]:size-16'>
          {img ? (
            <img
              className={`max-h-full max-w-full object-contain ${mediaClassName}`.trim()}
              src={img}
              alt=''
            />
          ) : icon ? (
            <BoxIcon
              name={icon}
              className={`text-[1.8rem] text-copy-strong ${mediaClassName}`.trim()}
            />
          ) : (
            <span className='text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-copy-muted' aria-hidden='true'>
              {getInstitutionInitials(institution)}
            </span>
          )}
        </div>

        <div className='flex flex-wrap justify-end gap-2'>
          {featuredIcon && (
            <span
              className='inline-flex size-8 items-center justify-center rounded-full border border-outline/70 bg-panel/82 text-copy-soft shadow-[0_10px_20px_-22px_var(--color-shadow-md)]'
              title='Certificação em destaque'
              role='img'
              aria-label='Certificação em destaque'
            >
              <span className="material-symbols-outlined text-[0.95rem] leading-none [font-variation-settings:'FILL'_0,'wght'_500,'GRAD'_0,'opsz'_24]" aria-hidden='true'>
                {featuredIcon}
              </span>
            </span>
          )}

          <span
            className={`inline-flex min-h-8 items-center rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] ${statusClassName}`.trim()}
          >
            {statusLabel}
          </span>
        </div>
      </div>

      <div className='mt-5 flex flex-1 flex-col'>
        {category && (
          <span className='inline-flex w-fit rounded-full border border-outline/65 bg-app-alt/92 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-copy-muted'>
            {category}
          </span>
        )}

        <h3 className='mt-3 text-[1.08rem] font-semibold leading-[1.12] tracking-[-0.03em] text-copy-strong min-[500px]:text-[1.18rem]'>
          {name}
        </h3>

        <p className='mt-2 text-[0.92rem] font-medium leading-relaxed text-copy-muted min-[500px]:text-[0.96rem]'>
          {institution}
        </p>

        {tags.length > 0 && (
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className='inline-flex rounded-full border border-outline/65 bg-panel/76 px-2.5 py-1 text-[0.7rem] font-medium text-copy-muted'
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {metaItems.length > 0 && (
          <p className='mt-5 border-t border-outline/65 pt-4 text-[0.82rem] font-medium leading-relaxed text-copy-muted min-[500px]:text-[0.86rem]'>
            {metaItems.join(' • ')}
          </p>
        )}

        <div className='mt-auto pt-4'>
          <a
            className='inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-primary transition-colors duration-200 hover:text-primary-strong focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft'
            target='_blank'
            rel='noreferrer'
            href={link_institution}
            aria-label={`Ver certificado: ${name}`}
          >
            <span>Ver certificado</span>
            <span aria-hidden='true' className='text-[0.92rem]'>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
