import * as Dialog from '@radix-ui/react-dialog';
import './styles.css';

export default function Modal({ children, isOpen, setIsOpen }) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className='modal-container'>
          <Dialog.Content className='modal-content'>
            {children}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
  
}
