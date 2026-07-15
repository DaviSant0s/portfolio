import * as Dialog from '@radix-ui/react-dialog';
import './styles.css';
import NavHeaderSideBar from '../NavHeaderSideBar';
import Logo from '../Logo';

export default function SideBar() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='background-sidebar' />
      <Dialog.Content className='sideBar-container'>
        <Dialog.Title className='sideBar-sr-only'>Menu de navegacao</Dialog.Title>
        <Dialog.Description className='sideBar-sr-only'>
          Use este painel para navegar pelas secoes do portfolio.
        </Dialog.Description>
        <div className='title-sideBar'>
          <Logo sideBar={true}/>
        </div>
        <NavHeaderSideBar/>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
