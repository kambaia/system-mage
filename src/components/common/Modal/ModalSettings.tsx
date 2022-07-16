import { InpuGroup } from '@components/customer/Forms/styles';
import Button from '@components/ui/button';
import Input from '@components/ui/input';
import Select from '@components/ui/select/select';
import React, {useState } from 'react';
import { CardButton, Container } from './style/styles';

type ModalType = {
  open: boolean;
  onClose: (value: boolean) => void;
}
const Modal = ({ open, onClose }: ModalType) => {
  const [panel, setPanel]= useState("app-setting");
  if (!open) return null;
  return (
    <Container>
      <div onClick={() => onClose(open)} className='h-screen bg-black bg-opacity-80 fixed inset-0 z-50 top-0 bottom-0 left-0 right-0'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          <img src={'/back-bainner.jpg'} alt='/' />
          <div className='modalRight'>
            <p className='closeBtn' onClick={() => onClose(open)}>
              X
            </p>
            <div className='content'>
              <div className='btnContainer'>
                <button className='btnPrimary'>
                  <span className='bold'>Definições do Sistema</span>
                </button>
                <button className='btnPrimary'>
                  <span className='bold'>Conta Bancária</span>
                </button>

              </div>
              {panel ==="banco-account"? 
              (
                <div className='body-main'>
                
                <div className='header-modal'>
                  <h3>Adicionar as configurações bancária</h3>
                </div>
                <form>
                  <Select
                    options={[
                      {
                        label: "Banco BFA",
                        value: "BFA"
                      },
                      {
                        label: "Banco ATLANTICO",
                        value: "Diretor Geral"
                      },
                      {
                        label: "Banco ATLANTICO",
                        value: "Diretor Geral"
                      },
                      {
                        label: "diretor administrativo",
                        value: "Diretor Geral"
                      }]}
                    defaultValue={"Cargo do funcionario"}
                    className="mb-4"
                    placeholder='Entroduza aqui o número do BI do funcionário'

                  />
                  <Input
                        name='bank_account_number'
                        label="Número Telefone Associada a Conta"
                        type="text"
                        variant="outline"
                        placeholder='932-103-103'

                      />
                    <InpuGroup>
                    <div className="mb-4 input">
                      <Input
                        name='phone_n_associated'
                        label="Número da Conta"
                        type="number"
                        variant="outline"
                        placeholder='Ex: 102993838'

                      />
                    </div>
                    <div className="mb-4 input">
                      <Input
                       name='iban_number'
                        label="Número do IBAN"
                        type="text"
                        variant="outline"
                        placeholder='AO06.0040.xxxx.xxxx.xxxx.xxx.xx'
                      />

                    </div>
                  </InpuGroup>
										<CardButton>
										<Button>Salvar</Button>
										</CardButton>
                </form>
              </div>
              ):
              (
                <div className='body-main'>
                
                <div className='header-modal'>
                  <h3>Adicionar Configurações do Sistema</h3>
                </div>
                <form>
                  <Select
                    options={[
                      {
                        label: "Banco BFA",
                        value: "BFA"
                      },
                      {
                        label: "Banco ATLANTICO",
                        value: "Diretor Geral"
                      },
                      {
                        label: "Banco ATLANTICO",
                        value: "Diretor Geral"
                      },
                      {
                        label: "diretor administrativo",
                        value: "Diretor Geral"
                      }]}
                    defaultValue={"Cargo do funcionario"}
                    className="mb-4"
                    placeholder='Entroduza aqui o número do BI do funcionário'

                  />
                  <Input
                        name='bank_account_number'
                        label="Número Telefone Associada a Conta"
                        type="text"
                        variant="outline"
                        placeholder='932-103-103'

                      />
                    <InpuGroup>
                    <div className="mb-4 input">
                      <Input
                        name='phone_n_associated'
                        label="Número da Conta"
                        type="number"
                        variant="outline"
                        placeholder='Ex: 102993838'

                      />
                    </div>
                    <div className="mb-4 input">
                      <Input
                       name='iban_number'
                        label="Número do IBAN"
                        type="text"
                        variant="outline"
                        placeholder='AO06.0040.xxxx.xxxx.xxxx.xxx.xx'
                      />

                    </div>
                  </InpuGroup>
										<CardButton>
										<Button>Salvar</Button>
										</CardButton>
                </form>
              </div>
              )
            
            
            }
           

            </div>

          </div>
        </div>
      </div>
    </Container>
  );
};

export default Modal;