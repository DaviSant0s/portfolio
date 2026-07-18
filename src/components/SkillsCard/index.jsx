export default function SkillsCard({ image, name, imageClassName = '' }) {
  return (
    <article className='group flex h-full flex-col items-center gap-3 rounded-[26px] border border-outline/65 bg-panel/75 p-3 text-center shadow-[0_18px_40px_-30px_var(--color-shadow-md)] backdrop-blur-sm transition-all duration-300 ease-[var(--ease-fluid)] hover:-translate-y-1 hover:border-primary-soft hover:shadow-[0_24px_48px_-30px_var(--color-shadow-lg)] min-[500px]:gap-3.5 min-[500px]:p-3.5'>
      <div className='flex h-[96px] w-full items-center justify-center rounded-[22px] border border-outline/70 bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel-muted))] transition-all duration-300 ease-out group-hover:border-primary-soft group-hover:bg-[linear-gradient(180deg,var(--color-panel),var(--color-primary-surface))] min-[500px]:h-[104px]'>
        <div className='flex size-[72px] select-none items-center justify-center min-[500px]:size-[78px]'>
          <img
            className={`max-h-[52px] w-[30px] object-contain ${imageClassName}`.trim()}
            src={image}
            alt={name}
          />
        </div>
      </div>
      <p className='text-[0.84rem] font-medium leading-tight tracking-[-0.02em] text-copy-strong min-[500px]:text-[0.92rem]'>
        {name}
      </p>
    </article>
  )
}
