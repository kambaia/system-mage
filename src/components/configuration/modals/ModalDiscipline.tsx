import Button from '@components/ui/button';
import Input from '@components/ui/input';
import Select from '@components/ui/select/select';
import { UIContext } from '@contexts/ui.context';
import { useContext, useState } from 'react';
import { getDate } from 'src/helper/getAllData';
import { CardButton, Container } from './style/styles';

type Options = {
  label: string,
  value: string
}
const ModalDiscipline = () => {
  const { closeModal, displayModal } = useContext(UIContext);
  if (!displayModal) return null;
  const options = getDate();
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
                  <h3 className='block text-gray-600 font-semibold text-sm leading-none mb-3'>Registro das disciplina</h3>
                </div>
                <form>
                <div>
                    <Input
                      name='bank_account_number'
                      label="Disciplina"
                      type="text"
                      variant="outline"
                      placeholder='Digite aqui o disciplina'
                    />
                  </div>
                  <div className='group'>
                    <Input
                      name='bank_account_number'
                      label="Sigla"
                      type="text"
                      variant="outline"
                      placeholder='Digite aqui a abreviação da disciplina'
                    />
                  </div>

                  <div className='group'>
                    <label className='block text-gray-600 font-semibold text-sm leading-none mb-3'>Selecione o ano letivo da disciplina</label>
                    <Select
                      options={options}
                      defaultValue={"Ano letivo"}
                      className="mb-4"
                      placeholder='Seleciona ou pesquisa a propina'
                    />


                  </div>



                  <CardButton>
                    <Button>Salvar</Button>
                  </CardButton>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { ModalDiscipline };