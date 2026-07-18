import MiniCardExp from '../MiniCardExp';

export default function ExperienceCard({
  date,
  logo,
  logoClassName,
  logoSurfaceClassName,
  logoFallback,
  institution,
  description,
  position
}) {
  return (
    <div className='grid w-full grid-cols-[5rem_minmax(0,1fr)] items-start gap-6 max-[640px]:grid-cols-1 max-[640px]:gap-0'>
      <div className='flex justify-center pt-6 max-[640px]:hidden'>
        <div className='grid size-11 place-items-center rounded-full border-[4px] border-app bg-primary shadow-[0_10px_24px_-10px_var(--color-shadow-lg)]'>
          <span className="material-symbols-outlined relative -translate-y-px text-[1.15rem] leading-none text-white [font-variation-settings:'FILL'_1,'wght'_500,'GRAD'_0,'opsz'_24]">
            apartment
          </span>
        </div>
      </div>
      <div className='w-full'>
        <MiniCardExp 
          date={date}
          logo={logo} 
          logoClassName={logoClassName}
          logoSurfaceClassName={logoSurfaceClassName}
          logoFallback={logoFallback}
          institution={institution} 
          description={description}
          position={position}
        />
      </div>
    </div>
  )
}
