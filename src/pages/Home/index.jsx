import './styles.css';
import img_home from '../../assets/img-home.jpg';

import SocialButton from '../../components/SocialButton';

export default function Home() {
  return (
    <div id='id_home' className='home-container defaultHome'>

      <div className='description-image-container'>
        <div className='description-home'>

          <h1>Olá! Bem vindo ao meu portfólio</h1>

          <p>
            Meu nome é <strong>Davi Santos</strong>, tenho 23 anos, sou uma pessoa 
            bastante dedicada aos estudos, focado e sempre aprendendo 
            coisas novas relacionadas à programação, engenharia e desenvolvimento pessoal. 
          </p>

          <p>
          Busco por desafios e oportunidades para crescer profissionalmente, estando em constante evolução para contribuir com 
          soluções inovadoras e eficientes.
          </p>

          <p>
            Atualmente estou cursando <strong>Engenharia de Computação</strong> na <strong>
              Universidade
              Federal do Rio Grande
            </strong> (FURG) e focando no desenvolvimento FullStack.
          </p>
          
          {/* <a className='curriculum-btn' href="https://drive.google.com/file/d/1hHtHCqwOIouLySi8dBQeAUHaJB8wdku1/view?usp=sharing" target='_blank'>
           <Button name={'Currículo'} icon={'file_download'}/>
          </a> */}

          <div className='btns-home-container'>
            <SocialButton 
              type={'github'} 
              btn_style={{paddingLeft: '25px', paddingRight: '25px'}}
            />

            <SocialButton 
              type={'linkedin'}
              btn_style={{paddingLeft: '25px', paddingRight: '25px'}}
            />
          </div>

          
        </div>
        <div className='image-container-home'>
          <img src={img_home} alt="image-home" />
        </div>
      </div>

      
    </div>
  )
}
