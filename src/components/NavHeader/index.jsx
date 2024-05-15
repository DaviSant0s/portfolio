import { Link } from 'react-scroll';
import { useContext } from 'react';
import { GlobalHeaderContext } from '../../context/HeaderContext';
import { styleCurrentBtnPage, MarginCurrentBtnPage } from  '../../styles/header/index.js';

import './styles.css';

export default function NavHeader( { style_nav={} } ) {

  // estado Global do header
  const headerContext = useContext(GlobalHeaderContext);

  // desestruturação das funções que muda as variáveis do estado global
  const { setStyleHome, setStyleCertification, 
          setStyleSkills, setStyleProjects} = headerContext;
  
  // desestruturação das variáveis de estado global
  const { styleHome, styleCertification, styleSkills, styleProjects } = headerContext;
  
  // desestruturação da função que altera do estado global de seleção do botão de página
  const { selectedPage, setSelectedPage } = headerContext;
  
  // Função que altera a variável de estado global de seleção do botão de página
  const handleClickBtnPage = (page) => {
    setSelectedPage({to: page, bool: true});

    if(page === 'home') {
      setStyleHome({...styleCurrentBtnPage, ...MarginCurrentBtnPage.home});
    } else {
      setStyleHome({});
    }

    if(page === 'certifications') {
      setStyleCertification({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.certifications });
    } else {
      setStyleCertification({});
    }

    if(page === 'skills') {
      setStyleSkills({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.skills });
    } else {
      setStyleSkills({});
    }

    if(page === 'projects') {
      setStyleProjects({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.projects });
    } else {
      setStyleProjects({});
    }

    /* ainda não emplementado essas páginas */
    if(page === 'experiences') {

    }

    if(page === 'contact') {
      
    }

  }
  
  return (
    <nav className='nav-header' style={style_nav} >

      <Link to='id_header' smooth={true} className='Link'>
        <div onClick={() => handleClickBtnPage('home')} style={styleHome} className='home link-page'>Home</div>
      </Link>

      <Link to='id_certifications' smooth={true} offset={-79} duration={700} className='Link'>
        <div onClick={() => handleClickBtnPage('certifications')} style={styleCertification} className='certifications link-page'>Certificações</div>
      </Link>

      <Link to='id_skills' smooth={true} offset={-80} duration={700} className='Link'>
        <div onClick={() => handleClickBtnPage('skills')} style={styleSkills} className='skills link-page'>Habilidades</div>
      </Link>

      <Link to='id_projects' smooth={true} offset={-80} duration={700} className='Link'>
        <div onClick={() => handleClickBtnPage('projects')} style={styleProjects} className='projects link-page'>Projetos</div>
      </Link>

      {/* <div className='about link-page'>Sobre mim</div> */}
      <Link to='' className='Link'>
        <div onClick={() => handleClickBtnPage('experiences')} className='experiences link-page'>Experiências</div>
      </Link>

      <Link to='' className='Link'>
        <div onClick={() => handleClickBtnPage('contact')} className='contact link-page'>Contato</div>
      </Link>
    </nav>
  )
}