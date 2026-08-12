export default function SkillsCard({ icon, name }) {
  return (
    <article className='group flex w-[96px] flex-col items-center gap-1.5 rounded-[22px] border border-outline/65 bg-panel/74 px-1.5 py-1.5 text-center shadow-[0_16px_34px_-30px_var(--color-shadow-md)] backdrop-blur-sm transition-all duration-300 ease-[var(--ease-fluid)] hover:-translate-y-1 hover:border-primary-soft hover:shadow-[0_22px_42px_-30px_var(--color-shadow-lg)] min-[500px]:w-[104px] min-[500px]:gap-1.5 min-[500px]:px-2 min-[500px]:py-1.5'>
      <div className='flex h-[58px] w-full items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] transition-all duration-300 ease-out group-hover:bg-[linear-gradient(180deg,rgba(251,84,78,0.06),rgba(251,84,78,0.03))] min-[500px]:h-[64px]'>
        <div className='flex size-[44px] select-none items-center justify-center rounded-[18px] border border-outline/60 bg-panel/90 shadow-[0_10px_18px_-16px_var(--color-shadow-md)] transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-primary-soft min-[500px]:size-[48px]'>
          <i
            className={`bx ${icon} text-[1.5rem] text-copy-strong transition-colors duration-300 ease-out group-hover:text-primary min-[500px]:text-[1.62rem]`.trim()}
            aria-hidden='true'
          />
        </div>
      </div>
      <p className='text-[0.72rem] font-medium leading-tight tracking-[-0.02em] text-copy-strong min-[500px]:text-[0.76rem]'>
        {name}
      </p>
    </article>
  )
}
