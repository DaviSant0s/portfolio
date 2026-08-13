import { useEffect, useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Modal from '../Modal';

function DetailList({ items = [] }) {
  if (!items.length) return null;

  return (
    <ul className='space-y-2.5'>
      {items.map((item) => (
        <li
          key={item}
          className='flex gap-2 text-[0.93rem] leading-[1.55] text-copy-muted'
        >
          <span className='mt-2 size-1.5 shrink-0 rounded-full bg-primary-soft' aria-hidden='true'/>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetailsModal({
  isOpen,
  setIsOpen,
  project,
}) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    scrollRef.current?.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [isOpen, project?.id]);

  if (!project) return null;

  const projectLink = project.links?.[0];

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Dialog.Title className='sr-only'>
        Detalhes do projeto {project.name}
      </Dialog.Title>
      <Dialog.Description className='sr-only'>
        Modal com informações detalhadas do projeto selecionado.
      </Dialog.Description>

      <section className='relative w-[min(100vw-24px,980px)] overflow-hidden rounded-[28px] border border-outline/70 bg-panel shadow-[0_30px_80px_-38px_var(--color-shadow-lg)]'>
        <div className='absolute right-4 top-4 z-10'>
          <Dialog.Close asChild>
            <button
              type='button'
              className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-outline/70 bg-panel/92 text-copy-strong shadow-[0_16px_30px_-22px_var(--color-shadow-md)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-copy-soft hover:bg-panel focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft'
              aria-label='Fechar detalhes do projeto'
            >
              <span className='material-symbols-outlined text-[1.12rem]' aria-hidden='true'>close</span>
            </button>
          </Dialog.Close>
        </div>

        <div
          ref={scrollRef}
          className='max-h-[min(72vh,760px)] overflow-y-auto px-4 py-5 min-[640px]:px-6 min-[640px]:py-6'
        >
          <div className='flex flex-col gap-5 pr-12 min-[640px]:pr-14'>
            <div className='flex flex-wrap items-center justify-between gap-3'>
              <div className='flex flex-wrap items-center gap-2'>
                {project.badge ? (
                  <span className='inline-flex w-fit items-center rounded-full border border-outline/70 bg-panel/82 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-copy-soft'>
                    {project.badge}
                  </span>
                ) : null}

                {project.status ? (
                  <span className='inline-flex w-fit items-center rounded-full border border-outline/70 bg-panel-muted/80 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-copy-muted'>
                    {project.status}
                  </span>
                ) : null}
              </div>

              {projectLink ? (
                <a
                  className='inline-flex h-10 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-[#15181d] px-5 text-[0.86rem] font-semibold text-white shadow-[0_14px_28px_-22px_rgba(21,24,29,0.48)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#0f1115] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft dark:bg-white dark:text-[#12161d] dark:shadow-[0_14px_28px_-22px_rgba(0,0,0,0.32)] dark:hover:bg-[#f4f7fa]'
                  href={projectLink.href}
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>{projectLink.label}</span>
                  <span className='material-symbols-outlined text-[1rem]' aria-hidden='true'>
                    arrow_outward
                  </span>
                </a>
              ) : null}
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='text-[1.55rem] font-semibold leading-tight tracking-[-0.04em] text-copy-strong min-[640px]:text-[1.9rem]'>
                {project.name}
              </h3>
              <p className='max-w-[66ch] text-[0.98rem] leading-[1.7] text-copy-muted min-[640px]:text-[1.03rem]'>
                {project.summary}
              </p>
            </div>

            <div className='grid grid-cols-1 gap-4 min-[720px]:grid-cols-2 min-[720px]:items-start min-[720px]:gap-6'>
              <div className='min-w-0 space-y-4'>
                <div className='space-y-4 rounded-[22px] border border-outline/70 bg-panel-muted/55 p-4 min-[640px]:p-5'>
                  <div className='space-y-1.5'>
                    <h4 className='text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-copy-soft'>
                      Contexto
                    </h4>
                    <p className='text-[0.96rem] leading-[1.7] text-copy-muted'>
                      {project.context || 'Informação não disponível no currículo.'}
                    </p>
                  </div>

                  <div className='space-y-1.5'>
                    <h4 className='text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-copy-soft'>
                      Meu papel
                    </h4>
                    <p className='text-[0.96rem] leading-[1.7] text-copy-muted'>
                      {project.role || 'Informação não disponível no currículo.'}
                    </p>
                  </div>

                  {project.status ? (
                    <div className='space-y-1.5'>
                      <h4 className='text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-copy-soft'>
                        Status
                      </h4>
                      <p className='text-[0.96rem] leading-[1.7] text-copy-muted'>
                        {project.status}
                      </p>
                    </div>
                  ) : null}
                </div>

                <div className='space-y-2 rounded-[22px] border border-outline/70 bg-panel-muted/55 p-4 min-[640px]:p-5'>
                  <h4 className='text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-copy-soft'>
                    Tecnologias
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {(project.technologies || []).map((technology) => (
                      <span
                        key={technology}
                        className='inline-flex items-center rounded-full border border-outline/65 bg-panel px-3 py-1 text-[0.84rem] font-medium text-copy-strong'
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className='min-w-0 space-y-4'>
                <div className='space-y-2 rounded-[22px] border border-outline/70 bg-panel-muted/55 p-4 min-[640px]:p-5'>
                  <h4 className='text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-copy-soft'>
                    Descrição detalhada
                  </h4>
                  <p className='text-[0.96rem] leading-[1.75] text-copy-muted'>
                    {project.description || project.summary}
                  </p>
                </div>

                <div className='space-y-2 rounded-[22px] border border-outline/70 bg-panel-muted/55 p-4 min-[640px]:p-5'>
                  <h4 className='text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-copy-soft'>
                    Destaques
                  </h4>
                  <DetailList items={project.highlights} />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
}
