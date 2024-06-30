import { useModal } from '../../context/ModalContext';
import Modal from '../Modal';
import './styles.css'

export default function ModalCertification({ status }) {
  const { setIsOpen } = useModal();


  return (
    <Modal>
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
              onClick={() => setIsOpen(false)}
              className="material-symbols-outlined closeModal-btn"
            > close </span>

          </div>
        </div>
    </Modal>
  )
}
