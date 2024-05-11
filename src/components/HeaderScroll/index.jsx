import Logo from '../Logo';
import './styles.css';
import Button from '../Button';
import NavHeader from '../NavHeader';
import DarkModeBtn from '../DarkModeBtn'

export default function HeaderScroll( {
  currentStyleHome,
  currentStyleCertification,
  currentStyleSkills,
  currentStyleProjects
} ) {

  return (
    <header className='header-container-scroll'>
      <div className='header-content-scroll'>
        <div className='logo-and-buttons-header-scroll'>
          <Logo headerScroll={true} />
          <div className='navHeaderAnimationBug-container-scroll'>
            <NavHeader 
              style_nav={{height: '41px' }}
              
              currentStyleHome={currentStyleHome}
              currentStyleCertification={currentStyleCertification}
              currentStyleSkills={currentStyleSkills}
              currentStyleProjects={currentStyleProjects}
            />
          </div>
          <div className='btns-header-scroll'>

            <div className='contact-btn-scroll'>

                <a className='curriculum-btn-scroll' href="https://drive.google.com/file/d/1hHtHCqwOIouLySi8dBQeAUHaJB8wdku1/view?usp=sharing" target='_blank'>
                  <Button name={'Currículo'} icon={'file_download'}/>
                </a>
              
            </div>

            <DarkModeBtn styles_container={{marginTop: '0px'}}/>


          </div>
          
        </div>
        
      </div>
    </header>
  );
}