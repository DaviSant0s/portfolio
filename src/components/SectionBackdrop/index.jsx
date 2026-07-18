export default function SectionBackdrop({
  className = '',
  glowClassName = '',
  dotsClassName = '',
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`.trim()}>
      <div className='absolute inset-0 bg-[linear-gradient(180deg,var(--color-panel)_0%,var(--color-app-alt)_100%)]' />
      <div
        className={[
          'absolute inset-0 opacity-35 [background-image:radial-gradient(var(--color-border-muted)_0.75px,transparent_0.75px)] [background-size:24px_24px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.78),transparent_80%)]',
          dotsClassName,
        ].join(' ').trim()}
      />
      <div className='absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-border),transparent)] opacity-75' />
      <div
        className={[
          'absolute left-1/2 top-0 h-[20rem] w-[min(70vw,46rem)] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(251,84,78,0.1),transparent_68%)] blur-3xl',
          glowClassName,
        ].join(' ').trim()}
      />
    </div>
  )
}
