import ScrollReveal from '../ScrollReveal';

export default function SectionIntro({
  eyebrow,
  title,
  description,
  titleId,
  as = 'h1',
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}) {
  const Heading = as;

  return (
    <div
      className={[
        'relative flex max-w-[54rem] flex-col items-center text-center',
        className,
      ].join(' ').trim()}
    >
      <ScrollReveal
        amount={0.38}
        className='inline-flex items-center gap-2 rounded-full border border-outline/70 bg-panel/82 px-3.5 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-copy-muted shadow-[0_14px_30px_-24px_var(--color-shadow-md)] backdrop-blur-sm min-[500px]:px-4 min-[500px]:py-2 min-[500px]:text-[0.78rem]'
      >
        <span className='size-2 rounded-full bg-[linear-gradient(135deg,var(--color-info),var(--color-primary))]' />
        <span>{eyebrow}</span>
      </ScrollReveal>

      <ScrollReveal
        as={Heading}
        id={titleId}
        delay={0.06}
        amount={0.3}
        className={[
          'mt-5 max-w-[11.5ch] text-balance text-[clamp(2rem,5vw,3.35rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-copy-strong min-[500px]:mt-7 min-[790px]:max-w-[14ch]',
          titleClassName,
        ].join(' ').trim()}
      >
        {title}
      </ScrollReveal>

      <ScrollReveal
        as='p'
        delay={0.12}
        amount={0.26}
        className={[
          'mt-4 max-w-[20rem] text-balance text-[0.95rem] leading-[1.62] text-copy-muted min-[500px]:max-w-[33rem] min-[500px]:text-[1rem] min-[790px]:mt-5 min-[790px]:max-w-[44rem] min-[790px]:text-[1.07rem] min-[790px]:leading-[1.72]',
          descriptionClassName,
        ].join(' ').trim()}
      >
        {description}
      </ScrollReveal>
    </div>
  )
}
