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
          <span className='mt-2 size-1.5 shrink-0 rounded-full bg-primary-soft' />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function LinkList({ links = [] }) {
  if (!links.length) return null;

  return (
    <div className='flex flex-wrap gap-3'>
      {links.map((link) => (
        <a
          key={`${link.label}-${link.href}`}
          className='inline-flex h-11 items-center rounded-full border border-outline/70 bg-panel/82 px-4 text-[0.93rem] font-semibold text-copy-strong shadow-[0_16px_30px_-24px_var(--color-shadow-md)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-copy-soft hover:bg-panel focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft'
          href={link.href}
          target='_blank'
          rel='noreferrer'
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default function ProjectDetailsModal({
  isOpen,
  setIsOpen,
  project,
}) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Dialog.Title className='sr-only'>
        Detalhes do projeto {project.name}
      </Dialog.Title>
      <Dialog.Description className='sr-only'>
        Modal com informações detalhadas do projeto selecionado.
      </Dialog.Description>

      <section className='relative w-[min(100vw-24px,980px)] overflow-hidden rounded-[28px] border border-outline/70 bg-panel shadow-[0_30px_80px_-38px_var(--color-shadow-lg)]'>
        <div className='relative overflow-hidden border-b border-outline/60 bg-[linear-gradient(180deg,var(--color-panel-muted),var(--color-panel))]'>
          <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,84,78,0.18),transparent_34%),radial-gradient(circle_at_20%_30%,rgba(2,112,173,0.12),transparent_30%)]' />
          <img
            className={`h-[150px] w-full object-cover min-[640px]:h-[175px] min-[1024px]:h-[190px] ${project.modalImageClassName || project.imageClassName || ''}`.trim()}
            src={project.img}
            alt={`Prévia ampliada do projeto ${project.name}`}
          />
        </div>

        <div className='max-h-[min(72vh,760px)] overflow-y-auto px-4 py-4 min-[640px]:px-6 min-[640px]:py-5'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
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

              <div className='flex flex-col gap-2'>
                <h3 className='text-[1.55rem] font-semibold leading-tight tracking-[-0.04em] text-copy-strong min-[640px]:text-[1.9rem]'>
                  {project.name}
                </h3>
                <p className='max-w-[66ch] text-[0.98rem] leading-[1.7] text-copy-muted min-[640px]:text-[1.03rem]'>
                  {project.summary}
                </p>
              </div>
            </div>

            <div className='grid gap-4 min-[820px]:grid-cols-[1.2fr_0.8fr]'>
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

                <div className='space-y-1.5'>
                  <h4 className='text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-copy-soft'>
                    Descrição
                  </h4>
                  <p className='text-[0.96rem] leading-[1.75] text-copy-muted'>
                    {project.description || project.summary}
                  </p>
                </div>
              </div>

              <div className='space-y-4 rounded-[22px] border border-outline/70 bg-panel-muted/55 p-4 min-[640px]:p-5'>
                <div className='space-y-2'>
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

                <div className='space-y-2'>
                  <h4 className='text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-copy-soft'>
                    Destaques
                  </h4>
                  <DetailList items={project.highlights} />
                </div>

                {project.links?.length ? (
                  <div className='space-y-2'>
                    <h4 className='text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-copy-soft'>
                      Links
                    </h4>
                    <LinkList links={project.links} />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <Dialog.Close asChild>
          <button
            type='button'
            className='absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-outline/70 bg-panel/92 text-copy-strong shadow-[0_16px_30px_-22px_var(--color-shadow-md)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-copy-soft hover:bg-panel focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft'
            aria-label='Fechar detalhes do projeto'
          >
            <span className='material-icons text-[1.12rem]'>close</span>
          </button>
        </Dialog.Close>
      </section>
    </Modal>
  );
}
