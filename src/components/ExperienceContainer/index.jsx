import { timelineExperiences } from '../../data/experiences';
import ExperienceCard from '../ExperienceCard';
import ScrollReveal from '../ScrollReveal';

export default function ExperienceContainer() {
  return (
    <div className='w-full max-w-[1140px]'>
      <ScrollReveal className='mb-5 flex justify-start min-[790px]:mb-7' amount={0.34}>
        <h2 className='text-[1.18rem] font-semibold tracking-[-0.03em] text-copy-strong min-[500px]:text-[1.34rem]'>
          Linha do tempo
        </h2>
      </ScrollReveal>

      <div className='relative'>
        <div
          aria-hidden='true'
          className='absolute bottom-8 left-[1.375rem] top-7 z-0 w-px bg-[linear-gradient(180deg,rgba(251,84,78,0.04),rgba(251,84,78,0.42)_16%,rgba(251,84,78,0.28)_84%,rgba(251,84,78,0.06))] min-[1080px]:left-1/2 min-[1080px]:-translate-x-1/2'
        />

        <div className='relative z-[1] flex flex-col gap-5 min-[640px]:gap-6 min-[1080px]:gap-8'>
          {timelineExperiences.map((experience, index) => {
            const side = index % 2 === 0 ? 'left' : 'right';

            return (
              <ScrollReveal
                key={experience.id}
                className='w-full'
                amount={0.18}
                delay={Math.min(index, 4) * 0.06}
                viewportMargin='0px 0px -8% 0px'
              >
                <ExperienceCard
                  side={side}
                  type={experience.type}
                  date={experience.date}
                  logo={experience.logo}
                  logoClassName={experience.logoClassName}
                  logoSurfaceClassName={experience.logoSurfaceClassName}
                  institution={experience.institution}
                  description={experience.description}
                  position={experience.position}
                  technologies={experience.technologies}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
