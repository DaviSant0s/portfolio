import { experienceTypeConfig } from '../../data/experienceTypeConfig';
import MiniCardExp from '../MiniCardExp';

export default function ExperienceCard({
  side = 'left',
  type = 'professional',
  date,
  logo,
  logoClassName,
  logoSurfaceClassName,
  logoFallback,
  institution,
  description,
  position,
  technologies,
}) {
  const isLeftSide = side === 'left';
  const typeConfig = experienceTypeConfig[type] ?? experienceTypeConfig.professional;

  return (
    <div className='relative grid w-full grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-x-4 gap-y-3 min-[500px]:gap-x-5 min-[1080px]:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] min-[1080px]:gap-x-0'>
      <div
        className={[
          'col-start-2 row-start-1 min-w-0',
          isLeftSide
            ? 'min-[1080px]:col-start-1 min-[1080px]:justify-self-end'
            : 'min-[1080px]:col-start-3 min-[1080px]:justify-self-start',
        ].join(' ')}
      >
        <MiniCardExp
          date={date}
          typeLabel={typeConfig.label}
          logo={logo}
          logoClassName={logoClassName}
          logoSurfaceClassName={logoSurfaceClassName}
          logoFallback={logoFallback}
          institution={institution}
          description={description}
          position={position}
          technologies={technologies}
        />
      </div>

      <div
        aria-hidden='true'
        className='relative col-start-1 row-start-1 flex justify-center pt-6 min-[500px]:pt-7 min-[1080px]:col-start-2 min-[1080px]:pt-8'
      >
        <div className='relative flex items-center justify-center'>
          <span
            className={[
              'pointer-events-none absolute top-1/2 h-px -translate-y-1/2 bg-primary/24',
              'left-full w-4 min-[500px]:w-5',
              isLeftSide
                ? 'min-[1080px]:left-auto min-[1080px]:right-full min-[1080px]:w-5 min-[1260px]:w-6'
                : 'min-[1080px]:w-5 min-[1260px]:w-6',
            ].join(' ')}
          />

          <div className='grid size-11 place-items-center rounded-full border border-white/18 bg-[linear-gradient(180deg,var(--color-primary),var(--color-accent-strong))] shadow-[0_16px_34px_-18px_var(--color-shadow-lg)] ring-4 ring-app-alt/78 min-[500px]:size-12'>
            <span className="material-symbols-outlined relative -translate-y-px text-[1.05rem] leading-none text-white [font-variation-settings:'FILL'_1,'wght'_600,'GRAD'_0,'opsz'_24] min-[500px]:text-[1.15rem]">
              {typeConfig.icon}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
