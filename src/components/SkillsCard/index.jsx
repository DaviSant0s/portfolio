export default function SkillsCard({ image, name, imageClassName = '' }) {
  return (
    <article className='group flex h-full flex-col items-center gap-2.5 rounded-2xl border border-transparent bg-transparent p-1.5 text-center transition-transform duration-200 ease-out hover:-translate-y-1 min-[500px]:gap-3 min-[500px]:p-2'>
      <div className='flex h-[86px] w-full items-center justify-center rounded-2xl border border-outline bg-panel-muted shadow-soft transition-all duration-300 ease-out group-hover:border-primary-soft group-hover:bg-primary-surface group-hover:shadow-panel min-[500px]:h-[92px]'>
        <div className='flex size-[68px] select-none items-center justify-center min-[500px]:size-[72px]'>
          <img
            className={`max-h-[52px] w-[30px] object-contain ${imageClassName}`.trim()}
            src={image}
            alt={name}
          />
        </div>
      </div>
      <p className='text-[0.84rem] font-medium leading-tight tracking-[-0.01em] text-copy-strong min-[500px]:text-sm'>
        {name}
      </p>
    </article>
  )
}
