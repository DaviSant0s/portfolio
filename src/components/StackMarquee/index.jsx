import { skillGroups } from '../../data/skillsSection';

const featuredSkillNames = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'Tailwind CSS',
  'Docker',
];

const skillsByName = new Map(
  skillGroups.flatMap((group) => group.items).map((skill) => [skill.name, skill]),
);

const featuredSkills = featuredSkillNames
  .map((skillName) => skillsByName.get(skillName))
  .filter(Boolean);

function StackList({ copyIndex = 0 }) {
  const isDuplicate = copyIndex > 0;

  return (
    <ul
      className='stack-marquee__group'
      aria-hidden={isDuplicate ? 'true' : undefined}
    >
      {featuredSkills.map((skill) => (
        <li
          key={`${copyIndex}-${skill.name}`}
          className='group/stack-name flex shrink-0 items-center gap-2.5 text-[0.88rem] font-semibold tracking-[-0.02em] text-white/52 transition-colors duration-200 hover:text-white/80 min-[500px]:text-[0.94rem]'
        >
          <svg
            viewBox='0 0 24 24'
            className='size-[15px] shrink-0 text-white/38 transition-colors duration-200 group-hover/stack-name:text-white/65 min-[500px]:size-4'
            aria-hidden='true'
          >
            <path d={skill.icon.path} fill='currentColor' />
          </svg>
          <span>{skill.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function StackMarquee() {
  return (
    <section
      aria-label='Principais tecnologias'
      className='relative z-[1] overflow-hidden border-y border-white/[0.06] bg-[#121821] py-4 min-[500px]:py-5'
    >
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_30%,rgba(2,112,173,0.11),transparent_28%),radial-gradient(circle_at_92%_70%,rgba(251,84,78,0.07),transparent_26%)]' />
      <div className='pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.15)_0.65px,transparent_0.65px)] [background-size:22px_22px]' />

      <div className='stack-marquee__viewport relative z-[1] w-full'>
        <div className='stack-marquee__track'>
          {[0, 1, 2, 3, 4].map((copyIndex) => (
            <StackList key={copyIndex} copyIndex={copyIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}
