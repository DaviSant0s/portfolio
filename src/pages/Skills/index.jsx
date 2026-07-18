import api from '../../assets/api.png';
import bigO from '../../assets/bigO.jpeg';
import c from '../../assets/c.png';
import css from '../../assets/css.png';
import crud from '../../assets/crud.png';
import sql from '../../assets/database.png';
import dataStructure from '../../assets/dataStructure.png';
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
import POO from '../../assets/oo.png';
import python from '../../assets/python.png';
import react from '../../assets/react.png';
import tailwindcss from '../../assets/tailwindcss.svg';
import typescript from '../../assets/typescript.png';
import wordpress from '../../assets/wordpress.webp';
import SkillsCard from '../../components/SkillsCard';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

const skills = [
  { name: 'Javascript', image: javascript, imageClassName: 'rounded' },
  { name: 'Typescript', image: typescript, imageClassName: 'rounded' },
  { name: 'Python', image: python },
  { name: 'C', image: c },
  { name: 'Java', image: java, imageClassName: 'w-[40px]' },
  { name: 'React', image: react },
  { name: 'Node', image: node, imageClassName: 'w-[60px]' },
  { name: 'Sql', image: sql },
  { name: 'MySQL', image: mysql },
  { name: 'mongoDB', image: mongoDB, imageClassName: 'w-[60px]' },
  { name: 'html', image: html },
  { name: 'css', image: css },
  { name: 'git', image: git },
  { name: 'github', image: github, imageClassName: 'w-[60px]' },
  { name: 'Wordpress', image: wordpress, imageClassName: 'w-[60px]' },
  { name: 'CRUD', image: crud, imageClassName: 'w-[80px]' },
  { name: 'API REST', image: api, imageClassName: 'w-[40px]' },
  { name: 'POO', image: POO, imageClassName: 'w-[60px]' },
  { name: 'Express', image: express, imageClassName: 'w-[70px]' },
  { name: 'Postman', image: postman, imageClassName: 'w-[40px]' },
  { name: 'Tailwind', image: tailwindcss, imageClassName: 'w-[40px]' },
  { name: 'Insomnia', image: insomnia, imageClassName: 'w-[40px]' },
  { name: 'Estrutura de Dados', image: dataStructure, imageClassName: 'w-[40px]' },
  { name: 'Notação Big O', image: bigO, imageClassName: 'w-[40px]' },
];

export default function Skills() {
  const { ref } = useTrackActiveSection('skills');

  return (
    <section
      ref={ref}
      id='id_skills'
      className='page-section flex scroll-mt-[calc(var(--heightHeaderScroll)+var(--noticeHeight)+18px)] justify-center bg-app'
    >
      <div className='content-shell flex flex-col items-center gap-8 py-4 min-[790px]:py-6'>
        <div className='flex max-w-[760px] flex-col items-center gap-4 text-center'>
          <h1
            id='id_title_skills'
            className='w-fit text-section-title font-medium tracking-[-0.03em] text-copy-strong'
          >
            Habilidades
          </h1>
          <p className='text-balance text-[0.98rem] leading-relaxed text-copy-muted min-[790px]:text-[1.05rem]'>
            Tecnologias, ferramentas e fundamentos que uso para construir interfaces, APIs e projetos completos com mais consistência.
          </p>
        </div>

        <div className='grid w-full max-w-[980px] grid-cols-[repeat(auto-fit,minmax(118px,1fr))] gap-3 min-[640px]:gap-4'>
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
