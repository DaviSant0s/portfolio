import Logo from '../Logo';
import './styles.css';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-content-social-links'>
        <div className='footer-logo-container'>
          <Logo/>
        </div>
        <div className='footer-social-container'>
          <div className='footer-social-btn'>
           <i class='bx bxl-linkedin-square' />
           <span>Linkedin</span>
          </div>
          <div className='footer-social-btn'>
           <i class='bx bxl-github' />
           <span>Github</span>
          </div>
      
          <div className='footer-social-btn'>
           <i class='bx bxl-instagram' />
           <span>Instagram</span>
          </div>
        </div>
      </div>
      <div className='footer-content'>
        <span>Desenvolvido por <a target='_blank' href="https://www.linkedin.com/in/davisantoss/">Davi Santos</a></span>
      </div>
    </footer>
  )
}
