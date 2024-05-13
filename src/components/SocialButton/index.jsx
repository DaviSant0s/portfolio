import './styles.css';

export default function SocialButton({ type, btn_style={} }) {

  return (
    <>
      {type === 'github' && 
        <a href="https://github.com/DaviSant0s" target='_blank' className='link-github socialButton-link'>
          <div 
            style={btn_style} 
            className='github socialButton-contact'
          >

            <i className='bx bxl-github'></i>
            <span>GitHub</span>
          </div>
        </a>
      }
          
      {type === 'linkedin' && 
        <a href="https://www.linkedin.com/in/davisantoss/" target='_blank' className='link-linkedin socialButton-link'>
          <div 
            style={btn_style} 
            className='linkedin socialButton-contact'
          >
              <div className='linkedin-icon-container'>
                <i className='bx bxl-linkedin' ></i>
              </div>
              <span>LinkedIn</span>
          </div>
        </a>
      }
    </>
      
      );
    }
