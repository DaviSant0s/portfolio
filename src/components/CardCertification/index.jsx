import { useState } from 'react';
import Modal from '../Modal';
import './styles.css';

export default function CardCertification(
  {status=true, 
    img=null, 
    icon, 
    name, 
    description, 
    institution, 
    conclusion, 
    duration, 
    link_institution='', 
    link_credential='' , 
    style_icone={}, 
    style_title={}
  }) {

  const [ underline, setUnderline ] = useState({});
  const [ styleBtnCredential, setStyleBtnCredential ] = useState({});
  const [ styleBtnView, setStyleBtnView ] = useState({});
  const [ isOpenModal, setIsOpenModal ] = useState(false);

  /* card */
  const handleMouseEnterCardCertification = (e) => {
    setUnderline({
      textDecoration: 'underline',
    });
  
    setStyleBtnCredential({border: '1px solid #595554'});
    setStyleBtnView({border: '1px solid #595554'});
    
  }

  const handleMouseLeaveCardCertification = () => {
    setUnderline({});
  
    setStyleBtnCredential({});
    setStyleBtnView({});
  }

  /* btns credential */
  const handleMouseEnter_BtnCredential = () => {
    setStyleBtnCredential({});
  }

  const handleMouseLeave_BtnCredential = () => {
    setStyleBtnCredential({border: '1px solid #595554'});
  }

  /* btn ementa */
  const handleMouseEnter_BtnEmenta = () => {
    setStyleBtnView({});
  }

  const handleMouseLeave_BtnEmenta = () => {
    setStyleBtnView({border: '1px solid #595554'});
  }

  /* modal */
  const handleClickModal = () => {
    setIsOpenModal(s => !s);
  }
  
  return (
    <div>
      <div className='for-background-status'>

        <div style={status ? {backgroundColor: '#348C34'} : {backgroundColor: '#b9b85c'}} className='background-diagonal'></div>
        
        <div 
          onMouseEnter={handleMouseEnterCardCertification} 
          onMouseLeave={handleMouseLeaveCardCertification}
          className='cardCertification-container'
        >
          <div className='status-container-cardCertification'>
            <div style={status ? {backgroundColor: '#5cb85c'} : {backgroundColor: '#b9b85c'}} className='status-cardCertification'>
              <span>{status ? 'Concluído': 'Fazendo'}</span>
            </div>
          </div>
          <div className='cardCertification-content'>
            <div className='image-container-cardCertification'>
              <div className='image-content-cardCertification'>
                {img &&
                  <img style={style_icone} src={img} alt="" />
                }
                {!img &&
                  <i style={style_icone} className={icon} />
                }
              </div>
            </div>
            <div className='description-cardCertification-container'>
              <h1 style={style_title}>{name}</h1>
              <div className='description'>{description}</div>
      
              <div className='data-cardCertification-container'>
                <span className='title'>Instituição:</span>
                <p className='name'><a style={underline} target='_blank' href={link_institution}>{institution}</a></p>
              </div>
              <div className='data-cardCertification-container'>
                <span className='title'>Duração:</span>
                <p className='name'>{duration}</p>
              </div>
              <div className='data-cardCertification-container'>
                <span className='title'>Conclusão:</span>
                <p className='name'>{conclusion}</p>
              </div>
              <div className='container-credential-btns'>
                <a className='link-credential-btn' target='_blank' href={link_credential}>
                  <div
                    onMouseEnter={handleMouseEnter_BtnCredential}
                    onMouseLeave={handleMouseLeave_BtnCredential}
                    style={styleBtnCredential} 
                    className='credential-btn'
                  >
                    <p>Exibir credencial</p>
                    <span className="material-symbols-outlined">ios_share</span>
                  </div>
                </a>
                <div 
                  onMouseEnter={handleMouseEnter_BtnEmenta}
                  onMouseLeave={handleMouseLeave_BtnEmenta}
                  onClick={handleClickModal} 
                  style={styleBtnView} 
                  className='view-btn'
                >
                  <p>Ementa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpenModal && 
        <Modal setIsOpen={setIsOpenModal}>
          <div 
            className='design-color-theme'
            style={{backgroundColor: `${status ? '#5cb85c' : '#b9b85c'}`}}
          >
            <div className='modal-content-CardCertification'>
              <div className='amount-content'>
                <h1 className='title-content-modal'>Ementa</h1>

                <ul className='list-content-modal'>
                  <li><strong>Instalação dos programas</strong>, como Node, Visual Studio Code e mais</li>
                  <li><strong>Javascript básico</strong> (variáveis e coisas básicas de programação)</li>
                  <li><strong>Javascript com lógica de programação</strong> (estruturas condicionais, de repetição e mais)</li>
                  <li><strong>Javascript orientado a objetos</strong> (classes, funções construtoras, factory functions, e mais)</li>
                  <li><strong>Javascript funcional</strong> (seções específicas para funções, arrays e objetos)</li>
                  <li><strong>Javascript assíncrono</strong> (com promises, ajax, axios e fetch API)</li>
                  <li><strong>Webpack e Babel</strong> (para uso de recursos modernos em navegadores mais antigos)</li>
                  <li><strong>Node.js</strong> (básico de Node + Express e MongoDB)</li>
                  <li><strong>Projeto agenda</strong> (Um projeto real utilizando tudo o que foi descrito anteriormente)</li>
                  <li><strong>Deploy</strong> - Criar, configurar e manter um servidor Linux (inclui configuração de várias tecnologias diferentes)</li>
                  <li><strong>Api rest</strong> - Criar uma API Rest do zero usando Express, JWT e o Sequelize (com MariaDB/MySQL).</li>
                  <li><strong>React JS Básico</strong> - Criação de uma lista de tarefas utilizando o React JS e o localStorage do navegador.</li>
                  <li><strong>React JS Avançado</strong> - React Hooks, Redux + Redux Saga, Autenticação com JWT, Redux Persist e muito mais.</li>
                  <li><strong>Bônus:</strong> Expressões Regulares (Regex)</li>
                  <li><strong>TypeScript</strong></li>
                  <li>Princípios da programação orientada</li>
                  <li>Princípios S.O.L.I.D </li>
                  <li><strong>Testes automatizados</strong>  com o Jest</li>
                  <li><strong>NextJS + Strapi</strong> - vamos a criar sites com SSR e SSG usando o NextJS</li>
                  <li><strong>Bancos de dados SQL</strong> (MySQL)</li>
                  <li><strong>Knex</strong> - Query Builder</li>
                  <li><strong>Bônus:</strong> Padrões de projeto (Design patterns)</li>
                  <li><strong>Bônus:</strong> HTML5 e CSS3</li>
                </ul>

              </div>

              <span
                onClick={() => setIsOpenModal(s => !s)}
                className="material-symbols-outlined closeModal-btn"
              > close </span>

            </div>
          </div>
        </Modal>
      }

    </div>
  )
}