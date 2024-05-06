import { useState } from 'react';
import './styles.css';

export default function SocialButton({ type, btn_style={} }) {

  /* estados para os botoes */
  const [ styleBtnGithub, setStyleBtnGithub] = useState({});
  const [ styleBtnLinkedin, setStyleBtnLinkedin ] = useState({});
    
  /* hover github btn */
  const handleMouseEnterBtnGitHub = () => {
    setStyleBtnGithub({opacity: 1});
  }

  const handleMouseLeaveBtnGitHub = () => {
    setStyleBtnGithub({});
  }
  /* fim */


  /* hover linkedin btn */
  const handleMouseEnterBtnLinkedin = () => {
    setStyleBtnLinkedin({opacity: 1});
  }
  const handleMouseLeaveBtnLinkedin = () => {
    setStyleBtnLinkedin({});
  }
  /* fim */


  return (
    <>
      {type === 'github' && 
        <a href="https://github.com/DaviSant0s" target='_blank' className='link-github socialButton-link'>
          <div 
            onMouseEnter={handleMouseEnterBtnGitHub} 
            onMouseLeave={handleMouseLeaveBtnGitHub} 
            style={btn_style} 
            className='github socialButton-contact'
          >

            <i style={styleBtnGithub} className='bx bxl-github'></i>
            <span>GitHub</span>
          </div>
        </a>
      }
          
      {type === 'linkedin' && 
        <a href="https://www.linkedin.com/in/davisantoss/" target='_blank' className='link-linkedin socialButton-link'>
          <div 
            onMouseEnter={handleMouseEnterBtnLinkedin} 
            onMouseLeave={handleMouseLeaveBtnLinkedin}
            style={btn_style} 
            className='linkedin socialButton-contact'
          >
              <div style={styleBtnLinkedin} className='linkedin-icon-container'>
                <i className='bx bxl-linkedin' ></i>
              </div>
              <span>LinkedIn</span>
          </div>
        </a>
      }
    </>
      
      );
    }
