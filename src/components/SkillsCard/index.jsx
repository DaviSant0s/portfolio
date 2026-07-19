export default function SkillsCard({ image, name, imageClassName = '' }) {
  return (
    <article className='group flex h-full w-[104px] flex-col items-center gap-2 rounded-[22px] border border-outline/65 bg-panel/74 px-2.5 py-2.5 text-center shadow-[0_16px_34px_-30px_var(--color-shadow-md)] backdrop-blur-sm transition-all duration-300 ease-[var(--ease-fluid)] hover:-translate-y-1 hover:border-primary-soft hover:shadow-[0_22px_42px_-30px_var(--color-shadow-lg)] min-[500px]:w-[112px] min-[500px]:gap-2.5 min-[500px]:px-3 min-[500px]:py-3'>
      <div className='flex h-[78px] w-full items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] transition-all duration-300 ease-out group-hover:bg-[linear-gradient(180deg,rgba(251,84,78,0.06),rgba(251,84,78,0.03))] min-[500px]:h-[84px]'>
        <div className='flex size-[60px] select-none items-center justify-center min-[500px]:size-[66px]'>
          <img
            className={`max-h-[44px] object-contain ${imageClassName}`.trim()}
            src={image}
            alt={name}
          />
        </div>
      </div>
      <p className='text-[0.78rem] font-medium leading-tight tracking-[-0.02em] text-copy-strong min-[500px]:text-[0.84rem]'>
        {name}
      </p>
    </article>
  )
}
