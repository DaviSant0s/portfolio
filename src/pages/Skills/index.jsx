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
      className='page-section flex scroll-mt-[calc(var(--heightHeaderScroll)+var(--noticeHeight)+18px)] justify-center bg-app'
    >
      <div className='content-shell flex flex-col items-center gap-7 py-4 min-[790px]:gap-8 min-[790px]:py-6'>
        <div className='flex max-w-[760px] flex-col items-center gap-4 text-center'>
          <h1
            id='id_title_skills'
            className='w-fit text-section-title font-medium tracking-[-0.03em] text-copy-strong'
          >
            Habilidades
          </h1>
          <p className='max-w-[22rem] text-balance text-[0.95rem] leading-[1.58] text-copy-muted min-[500px]:max-w-[27rem] min-[790px]:max-w-none min-[790px]:text-[1.05rem] min-[790px]:leading-relaxed'>
            Stack mais alinhada ao meu momento atual, com foco em React, TypeScript, Node.js, APIs REST, bancos de dados e ferramentas de produtividade para desenvolvimento web.
          </p>
        </div>

        <div className='grid w-full max-w-[980px] grid-cols-[repeat(auto-fit,minmax(118px,1fr))] gap-2.5 min-[500px]:gap-3 min-[640px]:gap-4'>
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
