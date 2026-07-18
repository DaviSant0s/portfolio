import { useState } from 'react';
import ModalCertification from '../ModalCertification';

export default function CardCertification({
  status = false,
  img = null,
  icon,
  name,
  description,
  institution,
  conclusion,
  duration,
  link_institution = '',
  mediaClassName = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const statusLabel = status ? 'Concluído' : 'Em andamento';
  const statusClassName = status
    ? 'border-[rgba(92,184,92,0.24)] bg-[rgba(92,184,92,0.12)] text-state-success-strong dark:border-[rgba(120,212,120,0.22)] dark:bg-[rgba(120,212,120,0.12)]'
    : 'border-[rgba(185,184,92,0.24)] bg-[rgba(185,184,92,0.12)] text-[color:#8e7b2f] dark:border-[rgba(200,190,99,0.22)] dark:bg-[rgba(200,190,99,0.12)] dark:text-[color:#d6cb77]';

  return (
    <div className='h-full w-full'>
      <div className='relative h-full rounded-[28px] transition-transform duration-300 ease-[var(--ease-fluid)] hover:-translate-y-1'>
        <article className='relative z-[2] flex h-full w-full flex-col rounded-[28px] border border-outline/70 bg-panel/78 p-5 shadow-[0_18px_42px_-30px_var(--color-shadow-md)] backdrop-blur-sm transition-all duration-300 ease-[var(--ease-fluid)] hover:border-primary-soft hover:shadow-[0_24px_52px_-30px_var(--color-shadow-lg)] min-[500px]:p-6'>
          <div className='flex items-start justify-between gap-3'>
            <span
              className={`inline-flex min-h-9 items-center rounded-full border px-3.5 py-1.5 text-[0.76rem] font-semibold uppercase tracking-[0.12em] shadow-[0_10px_22px_-22px_var(--color-shadow-md)] min-[500px]:text-[0.8rem] ${statusClassName}`.trim()}
            >
              {statusLabel}
            </span>

            <div className='flex size-12 shrink-0 items-center justify-center rounded-[18px] border border-outline/70 bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel-muted))] p-2 min-[500px]:size-14 min-[500px]:rounded-[20px]'>
              {img ? (
                <img
                  className={`max-h-full max-w-full object-contain ${mediaClassName}`.trim()}
                  src={img}
                  alt={`Instituição ${institution}`}
                />
              ) : (
                <i className={`${icon} text-[2rem] text-copy-strong ${mediaClassName}`.trim()} />
              )}
            </div>
          </div>

          <div className='mt-5 flex flex-1 flex-col'>
            <h2 className='text-[1.12rem] font-semibold leading-[1.08] tracking-[-0.03em] text-copy-strong min-[500px]:text-[1.28rem]'>
              {name}
            </h2>

            <p className='mt-3 min-h-[4.2rem] text-[0.92rem] leading-[1.58] text-copy min-[500px]:min-h-[4.5rem] min-[500px]:text-[0.98rem] min-[500px]:leading-[1.64]'>
              {description}
            </p>

            <div className='mt-5 grid gap-3 border-t border-outline/65 pt-5'>
              <div className='flex flex-wrap items-start gap-[5px]'>
                <span className='shrink-0 text-[0.84rem] font-semibold uppercase tracking-[0.08em] text-copy-soft min-[500px]:text-[0.8rem]'>
                  Instituição
                </span>
                <p className='text-[0.9rem] leading-snug text-copy min-[500px]:text-[0.95rem]'>
                  <a
                    className='transition-colors duration-200 hover:text-primary hover:underline'
                    target='_blank'
                    rel='noreferrer'
                    href={link_institution}
                  >
                    {institution}
                  </a>
                </p>
              </div>

              <div className='flex flex-wrap items-start gap-[5px]'>
                <span className='shrink-0 text-[0.84rem] font-semibold uppercase tracking-[0.08em] text-copy-soft min-[500px]:text-[0.8rem]'>
                  Duração
                </span>
                <p className='text-[0.9rem] leading-snug text-copy min-[500px]:text-[0.95rem]'>{duration}</p>
              </div>

              <div className='flex flex-wrap items-start gap-[5px]'>
                <span className='shrink-0 text-[0.84rem] font-semibold uppercase tracking-[0.08em] text-copy-soft min-[500px]:text-[0.8rem]'>
                  Conclusão
                </span>
                <p className='text-[0.9rem] leading-snug text-copy min-[500px]:text-[0.95rem]'>{conclusion}</p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <ModalCertification isOpen={isOpen} setIsOpen={setIsOpen} status={status} />
    </div>
  )
}
