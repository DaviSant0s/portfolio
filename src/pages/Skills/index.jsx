import api from '../../assets/api.png';
import css from '../../assets/css.png';
import postgreSQL from '../../assets/database.png';
import express from '../../assets/express.svg';
import git from '../../assets/git.png';
import github from '../../assets/github1.webp';
import html from '../../assets/html.png';
import insomnia from '../../assets/insomnia.svg';
import java from '../../assets/java.svg';
import javascript from '../../assets/javascript.png';
import mongoDB from '../../assets/mongodb.svg';
import mysql from '../../assets/mysql.png';
import node from '../../assets/node.png';
import postman from '../../assets/postman.svg';
import python from '../../assets/python.png';
import react from '../../assets/react.png';
import tailwindcss from '../../assets/tailwindcss.svg';
import typescript from '../../assets/typescript.png';
import SectionBackdrop from '../../components/SectionBackdrop';
import SectionIntro from '../../components/SectionIntro';
import ScrollReveal from '../../components/ScrollReveal';
import SkillsCard from '../../components/SkillsCard';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'JavaScript', image: javascript, imageClassName: 'rounded-[0.35rem] w-[34px]' },
      { name: 'TypeScript', image: typescript, imageClassName: 'rounded-[0.35rem] w-[34px]' },
      { name: 'React', image: react, imageClassName: 'w-[42px]' },
      { name: 'HTML', image: html, imageClassName: 'w-[34px]' },
      { name: 'CSS', image: css, imageClassName: 'w-[34px]' },
      { name: 'Tailwind CSS', image: tailwindcss, imageClassName: 'w-[42px]' },
    ],
  },
  {
    title: 'Backend e dados',
    items: [
      { name: 'Node.js', image: node, imageClassName: 'w-[58px] brightness-125 contrast-125 saturate-125' },
      { name: 'Express', image: express, imageClassName: 'w-[64px] brightness-150 contrast-125 opacity-80' },
      { name: 'Java', image: java, imageClassName: 'w-[38px]' },
      { name: 'Python', image: python, imageClassName: 'w-[40px]' },
      { name: 'PostgreSQL', image: postgreSQL, imageClassName: 'w-[34px]' },
      { name: 'MySQL', image: mysql, imageClassName: 'w-[40px]' },
      { name: 'MongoDB', image: mongoDB, imageClassName: 'w-[38px]' },
    ],
  },
  {
    title: 'Ferramentas',
    items: [
      { name: 'Git', image: git, imageClassName: 'w-[38px]' },
      { name: 'GitHub', image: github, imageClassName: 'w-[42px] brightness-150 contrast-125' },
      { name: 'Postman', image: postman, imageClassName: 'w-[34px]' },
      { name: 'Insomnia', image: insomnia, imageClassName: 'w-[34px]' },
      { name: 'API REST', image: api, imageClassName: 'w-[32px]' },
    ],
  },
];

export default function Skills() {
  const { ref } = useTrackActiveSection('skills');

  return (
    <section
      ref={ref}
      id='id_skills'
      className='page-section relative flex scroll-mt-[calc(var(--heightHeaderScroll)+var(--noticeHeight)+18px)] justify-center overflow-hidden bg-app'
    >
      <SectionBackdrop
        glowClassName='top-10 h-[24rem] bg-[radial-gradient(circle_at_center,rgba(2,112,173,0.1),transparent_68%)]'
        dotsClassName='opacity-28'
      />

      <div className='content-shell relative z-[1] flex flex-col items-center gap-8 py-4 min-[790px]:gap-10 min-[790px]:py-6'>
        <SectionIntro
          eyebrow='Stack atual'
          title='Ferramentas que transformo em produto'
          titleId='id_title_skills'
          description='Minha base de trabalho hoje combina React, TypeScript, Node.js, Python, APIs REST, bancos de dados e ferramentas que ajudam a construir interfaces e fluxos mais robustos.'
          titleClassName='max-w-[14ch] min-[790px]:max-w-[15ch]'
        />

        <div className='flex w-full max-w-[1040px] flex-col gap-5 min-[640px]:gap-6'>
          {skillGroups.map((group, groupIndex) => (
            <div key={group.title} className='flex flex-col items-center gap-3 min-[640px]:gap-3.5'>
              <ScrollReveal
                className='flex w-full justify-center'
                amount={0.22}
                delay={groupIndex * 0.05}
              >
                <h3 className='text-center text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-copy-soft min-[500px]:text-[0.86rem]'>
                  {group.title}
                </h3>
              </ScrollReveal>

              <div className='flex w-full flex-wrap justify-center gap-2.5 min-[500px]:gap-3 min-[640px]:gap-3.5'>
                {group.items.map((skill, itemIndex) => (
                  <ScrollReveal
                    key={skill.name}
                    className='h-full'
                    amount={0.18}
                    delay={(groupIndex * 0.06) + (Math.min(itemIndex, 7) * 0.035)}
                  >
                    <SkillsCard
                      name={skill.name}
                      image={skill.image}
                      imageClassName={skill.imageClassName}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
