import Logo from '../Logo';
import './styles.css';
import Button from '../Button';
import NavHeader from '../NavHeader';
import DarkModeBtn from '../DarkModeBtn';

export default function Header() {

  return (

    <header className='header-container'>
      <div className='header-content'>
        <div className='logo-and-buttons-header'>
          <Logo/>
          <div className='btns-header'>

            <div className='contact-btn'>

                <a className='curriculum-btn' href="https://drive.google.com/file/d/1hHtHCqwOIouLySi8dBQeAUHaJB8wdku1/view?usp=sharing" target='_blank'>
                  <Button name={'Currículo'} icon={'file_download'}/>
                </a>
              
            </div>

            <DarkModeBtn/>

          </div>
          
        </div>
        
        <NavHeader/>
      </div>
    </header>

  );
}