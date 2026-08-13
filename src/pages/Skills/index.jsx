import SectionBackdrop from '../../components/SectionBackdrop';
import SectionIntro from '../../components/SectionIntro';
import ScrollReveal from '../../components/ScrollReveal';
import SkillsCard from '../../components/SkillsCard';
import { skillGroups, skillsSectionIntro } from '../../data/skillsSection';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

export default function Skills() {
  const { ref } = useTrackActiveSection('skills');

  const renderSkillCard = (skill, groupIndex, rowIndex, itemIndex) => (
    <ScrollReveal
      key={`${skill.name}-${groupIndex}-${rowIndex}-${itemIndex}`}
      amount={0.18}
      delay={(groupIndex * 0.045) + (rowIndex * 0.02) + (itemIndex * 0.015)}
    >
      <SkillsCard
        {...skill}
      />
    </ScrollReveal>
  );

  return (
    <section
      ref={ref}
      id='id_skills'
      aria-labelledby='id_title_skills'
      className='page-section relative flex scroll-mt-[calc(var(--heightHeaderScroll)+var(--noticeHeight)+18px)] justify-center overflow-hidden bg-app'
    >
      <SectionBackdrop
        glowClassName='top-10 h-[24rem] bg-[radial-gradient(circle_at_center,rgba(2,112,173,0.1),transparent_68%)]'
        dotsClassName='opacity-28'
      />

      <div className='content-shell relative z-[1] flex flex-col items-center gap-8 py-4 min-[790px]:gap-10 min-[790px]:py-6'>
        <SectionIntro
          eyebrow={skillsSectionIntro.eyebrow}
          title={skillsSectionIntro.title}
          titleId='id_title_skills'
          as='h2'
          description={skillsSectionIntro.description}
          titleClassName='max-w-[15ch] min-[790px]:max-w-[18ch]'
        />

        <div className='flex w-full max-w-[1140px] flex-col gap-4 min-[640px]:gap-5'>
          {skillGroups.map((group, groupIndex) => {
            const itemsByName = new Map(group.items.map((skill) => [skill.name, skill]));
            const rows = group.desktopRows ?? [group.items.map((skill) => skill.name)];

            return (
              <div key={group.title} className='flex flex-col items-center gap-2.5 min-[640px]:gap-3'>
                <ScrollReveal
                  className='flex w-full justify-center'
                  amount={0.22}
                  delay={groupIndex * 0.04}
                >
                  <h3 className='text-center text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-copy-soft min-[500px]:text-[0.82rem]'>
                    {group.title}
                  </h3>
                </ScrollReveal>

                <div className='flex w-full flex-col items-center gap-2.5 min-[500px]:gap-3 min-[640px]:gap-3.5'>
                  {rows.map((row, rowIndex) => (
                    <div
                      key={`${group.title}-row-${rowIndex}`}
                      className='flex w-full flex-wrap justify-center gap-2.5 min-[500px]:gap-3 min-[640px]:gap-3.5 min-[1100px]:flex-nowrap'
                    >
                      {row.map((skillName, itemIndex) => {
                        const skill = itemsByName.get(skillName);

                        if (!skill) {
                          return null;
                        }

                        return renderSkillCard(skill, groupIndex, rowIndex, itemIndex);
                      })}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
