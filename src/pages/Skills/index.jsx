import SkillsCard from '../../components/SkillsCard';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

import javascript from '../../assets/javascript.png';
import python from '../../assets/python.png';
import github from '../../assets/github1.webp';
import sql from '../../assets/database.png';
import react from '../../assets/react.png';
import mysql from '../../assets/mysql.png';
import css from '../../assets/css.png';
import html from '../../assets/html.png';
import node from '../../assets/node.png';
import c from '../../assets/c.png';
import git from '../../assets/git.png';
import wordpress from '../../assets/wordpress.webp';
import mongoDB from '../../assets/mongodb.svg';
import crud from '../../assets/crud.png';
import api from '../../assets/api.png';
import dataStructure from '../../assets/dataStructure.png';
import bigO from '../../assets/bigO.jpeg';
import POO from '../../assets/oo.png';
import express from '../../assets/express.svg';
import postman from '../../assets/postman.svg';
import tailwindcss from '../../assets/tailwindcss.svg';
import insomnia from '../../assets/insomnia.svg';
import java from '../../assets/java.svg';
import typescript from '../../assets/typescript.png';

const skills = [
  { name: 'Javascript', image: javascript, style_image: { borderRadius: '4px' } },
  { name: 'Typescript', image: typescript, style_image: { borderRadius: '4px' } },
  { name: 'Python', image: python },
  { name: 'C', image: c },
  { name: 'Java', image: java, style_image: { width: '40px' } },
  { name: 'React', image: react },
  { name: 'Node', image: node, style_image: { width: '60px' } },
  { name: 'Sql', image: sql },
  { name: 'MySQL', image: mysql },
  { name: 'mongoDB', image: mongoDB, style_image: { width: '60px' } },
  { name: 'html', image: html },
  { name: 'css', image: css },
  { name: 'git', image: git },
  { name: 'github', image: github, style_image: { width: '60px' } },
  { name: 'Wordpress', image: wordpress, style_image: { width: '60px' } },
  { name: 'CRUD', image: crud, style_image: { width: '80px' } },
  { name: 'API REST', image: api, style_image: { width: '40px' } },
  { name: 'POO', image: POO, style_image: { width: '60px' } },
  { name: 'Express', image: express, style_image: { width: '70px' } },
  { name: 'Postman', image: postman, style_image: { width: '40px' } },
  { name: 'Tailwind', image: tailwindcss, style_image: { width: '40px' } },
  { name: 'Insomnia', image: insomnia, style_image: { width: '40px' } },
  { name: 'Estrutura de Dados', image: dataStructure, style_image: { width: '40px' } },
  { name: 'Notação Big O', image: bigO, style_image: { width: '40px' } },
];

export default function Skills() {
  const { ref } = useTrackActiveSection('skills');

  return (
    <section ref={ref} id='id_skills' className='page-section flex justify-center bg-app'>
      <div className='content-shell flex flex-col items-center gap-8 py-4 min-[790px]:py-6'>
        <div className='flex max-w-[760px] flex-col items-center gap-4 text-center'>
          <h1 id='id_title_skills'>
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
              style_image={skill.style_image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
