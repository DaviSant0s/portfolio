import './styles.css';
import SkillsCard from '../../components/SkillsCard';

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

export default function Skills() {

  return (
    <div id='id_skills' className='skills-container defaultPages'>
      <div className='skills-content'>
        <h1 id='id_title_skills'>
          Habilidades
        </h1>
        <div className='skills-content-content'>
            <SkillsCard name={'Javascript'} image={javascript} style_image={{borderRadius: '4px'}}/>
            <SkillsCard name={'python'} image={python}/>
            <SkillsCard name={'c'} image={c}/>
            <SkillsCard name={'react'} image={react}/>
            <SkillsCard name={'node'} image={node} style_image={{width: '60px'}}/>
            <SkillsCard name={'sql'} image={sql}/>
            <SkillsCard name={'mysql'} image={mysql}/>
            <SkillsCard name={'mongoDB'} image={mongoDB} style_image={{width: '60px'}}/>
            <SkillsCard name={'html'} image={html}/>
            <SkillsCard name={'css'} image={css}/>
            <SkillsCard name={'git'} image={git}/>
            <SkillsCard name={'github'} image={github} style_image={{width: '60px'}}/>
            <SkillsCard name={'wordpress'} image={wordpress} style_image={{width: '60px'}}/>
            <SkillsCard name={'crud'} image={crud} style_image={{width: '80px'}}/>
            <SkillsCard name={'api'} image={api} style_image={{width: '40px'}}/>
            <SkillsCard name={'Estrutura de Dados'} image={dataStructure} style_image={{width: '40px'}}/>
            <SkillsCard name={'Notação Big O'} image={bigO} style_image={{width: '60px'}}/>
        </div>
      </div>
    </div>
  )
}
