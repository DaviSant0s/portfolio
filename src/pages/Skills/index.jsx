import api from '../../assets/api.png';
import css from '../../assets/css.png';
import sql from '../../assets/database.png';
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
import SkillsCard from '../../components/SkillsCard';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

const skills = [
  { name: 'Javascript', image: javascript, imageClassName: 'rounded' },
  { name: 'Typescript', image: typescript, imageClassName: 'rounded' },
  { name: 'React', image: react },
  { name: 'Node.js', image: node, imageClassName: 'w-[60px]' },
  { name: 'Express', image: express, imageClassName: 'w-[70px]' },
  { name: 'PostgreSQL', image: sql },
  { name: 'MySQL', image: mysql },
  { name: 'MongoDB', image: mongoDB, imageClassName: 'w-[60px]' },
  { name: 'HTML', image: html },
  { name: 'CSS', image: css },
  { name: 'Tailwind CSS', image: tailwindcss, imageClassName: 'w-[40px]' },
  { name: 'Git', image: git },
  { name: 'GitHub', image: github, imageClassName: 'w-[60px]' },
  { name: 'API REST', image: api, imageClassName: 'w-[40px]' },
  { name: 'Postman', image: postman, imageClassName: 'w-[40px]' },
  { name: 'Insomnia', image: insomnia, imageClassName: 'w-[40px]' },
  { name: 'Java', image: java, imageClassName: 'w-[40px]' },
  { name: 'Python', image: python },
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
          description='Minha base de trabalho hoje combina React, TypeScript, Node.js, APIs REST, bancos de dados e ferramentas que ajudam a construir interfaces e fluxos mais robustos.'
          titleClassName='max-w-[14ch] min-[790px]:max-w-[15ch]'
        />

        <div className='grid w-full max-w-[1040px] grid-cols-[repeat(auto-fit,minmax(128px,1fr))] gap-3 min-[500px]:gap-3.5 min-[640px]:gap-[1.125rem]'>
          {skills.map((skill) => (
            <SkillsCard
              key={skill.name}
              name={skill.name}
              image={skill.image}
              imageClassName={skill.imageClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
