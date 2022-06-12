import Button from '@components/ui/button';
import Input from '@components/ui/input';
import { UIContext } from '@contexts/ui.context';
import { useContext } from 'react';
import { CardButton, Container } from './style/styles';

const ModalGroup = () => {
  const { closeModal, displayModal } = useContext(UIContext);
  if (!displayModal) return null;
  return (
    <Container>
      <div onClick={closeModal} className='h-screen bg-black bg-opacity-80 fixed inset-0 z-50 top-0 bottom-0 left-0 right-0'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          <div className='modalRight'>
            <p className='closeBtn' onClick={closeModal}>
              X
            </p>
            <div className='content'>
              
              <div className='body-main'>
                <div className='header-modal'>
                  <h3 className='block text-gray-600 font-semibold text-sm leading-none mb-3'>Registro das Turmas</h3>
                </div>
                <form>
                <div className='group'>
                    <Input
                      name='bank_account_number'
                      label="Turma"
                      type="text"
                      variant="outline"
                      placeholder='Digite aqui turma'
                    />
                  </div>
                  <div className='group'>
                  <CardButton>
                    <Button>Salvar</Button>
                  </CardButton>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { ModalGroup };