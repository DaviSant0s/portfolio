import * as Dialog from '@radix-ui/react-dialog';
import Modal from '../Modal';

export default function ModalCertification({ status, isOpen, setIsOpen }) {
  const themeClassName = status ? 'bg-state-success' : 'bg-state-warning';

  return (

    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      
      <div 
        className={`overflow-hidden rounded-xl outline outline-1 outline-outline shadow-float ${themeClassName}`}
      >
        <Dialog.Description className='sr-only'>
          Conteudo programatico e ementa da certificacao selecionada.
        </Dialog.Description>
        <div className='relative flex h-[min(calc(var(--heightBody)*0.8),calc(100dvh-140px))] min-h-[320px] w-[min(90vw,1000px)] items-center justify-end rounded-b-xl bg-panel pt-[10px] pl-5 pb-[10px]'>
          <div className='h-full w-full overflow-y-auto pr-[18px]'>
            <Dialog.Title asChild>
              <h2 className='mb-5 text-[2rem] font-semibold leading-none text-copy-strong'>Ementa</h2>
            </Dialog.Title>

            <ul className='flex list-disc flex-col gap-2.5 pl-5 pb-2 text-[1.05rem] leading-relaxed text-copy'>
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

          <Dialog.Close asChild>
            <button
              type='button'
              className='absolute top-[5px] right-[10px] flex size-[42px] items-center justify-center rounded-full bg-transparent p-0 text-[2rem] text-copy transition-all duration-200 ease-out hover:bg-panel-strong hover:text-primary focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft'
              aria-label='Fechar modal de ementa'
            >
              <span className="material-symbols-outlined text-inherit leading-none">close</span>
            </button>
          </Dialog.Close>

        </div>
      </div>

    </Modal>

  )
}
