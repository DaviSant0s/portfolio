import { Link } from 'react-scroll';
import { useContext } from 'react';
import { GlobalHeaderContext } from '../../context/HeaderContext';
import { styleCurrentBtnPage } from  '../../styles/header/index.js';

import './styles.css';

export default function NavHeader( { style_nav={} } ) {

  // estado Global do header
  const headerContext = useContext(GlobalHeaderContext);

  // desestruturação variável do estado global do estilo de espaçamento do botão de página selecionado
  const { MarginCurrentBtnPage } = headerContext;

  // desestruturação das funções que muda as variáveis do estado global
  const { setStyleHome, setStyleCertification, 
          setStyleSkills, setStyleProjects,
          setStyleExperiences, setStyleContact} = headerContext;
  
  // desestruturação das variáveis de estado global
  const { styleHome, styleCertification, styleSkills, 
          styleProjects, styleExperiences, styleContact } = headerContext;
  
  // desestruturação da função que altera do estado global de seleção do botão de página
  const { setSelectedPage } = headerContext;

  // estado para indicar qual botão de página está selecionado no momento
  const { setSelectedCurrentPage } = headerContext;
  
  // Função que altera a variável de estado global de seleção do botão de página
  const handleClickBtnPage = (page) => {
    setSelectedPage({to: page, bool: true});

    if(page === 'home') {
      setStyleHome({...styleCurrentBtnPage, ...MarginCurrentBtnPage.home});
      setSelectedCurrentPage('home');
      
    } else {
      setStyleHome({});
    }

    if(page === 'certifications') {
      setStyleCertification({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.certifications });
      setSelectedCurrentPage('certifications');
    } else {
      setStyleCertification({});
    }

    if(page === 'skills') {
      setStyleSkills({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.skills });
      setSelectedCurrentPage('skills');
    } else {
      setStyleSkills({});
    }

    if(page === 'projects') {
      setStyleProjects({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.projects });
      setSelectedCurrentPage('projects');
    } else {
      setStyleProjects({});
    }

    if(page === 'experience') {
      setStyleExperiences({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.experience });
      setSelectedCurrentPage('experience');
    } else {
      setStyleExperiences({});
    }

    /* ainda não emplementado essas páginas */

    if(page === 'contact') {
      setStyleContact({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.contact });
      setSelectedCurrentPage('contact');
    } else {
      setStyleContact({});
    }

  }


  
  
  return (
    <nav className='nav-header' style={style_nav} >

      {/* <Link to='id_home' smooth={true} offset={-80} className='Link'>
        <div 
          onClick={() => handleClickBtnPage('home')} 
          style={styleHome} className='home link-page'
        >Início</div>
      </Link>

      <Link to='id_certifications' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          onClick={() => handleClickBtnPage('certifications')} 
          style={styleCertification} 
          className='certifications link-page'

        >Certificações</div>
      </Link>

      <Link to='id_skills' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          onClick={() => handleClickBtnPage('skills')} 
          style={styleSkills} 
          className='skills link-page'

        >Habilidades</div>
      </Link>

      <Link to='id_projects' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          onClick={() => handleClickBtnPage('projects')} 
          style={styleProjects} 
          className='projects link-page'

        >Projetos</div>
      </Link>

      <Link to='id_experience' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          onClick={() => handleClickBtnPage('experience')}
          style={styleExperiences}
          className='experiences link-page'

        >Experiências</div>
      </Link>

      <Link to='id_contact'  smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          onClick={() => handleClickBtnPage('contact')} 
          style={styleContact}
          className='contact link-page'
        >Contato</div>
      </Link> */}
    </nav>
  )
}