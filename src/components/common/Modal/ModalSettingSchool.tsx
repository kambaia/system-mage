import React, { useState } from 'react';
import { Container } from './style/styles';

type ModalType = {
  open: boolean;
  onClose: (value: boolean) => void;
};
const Modal = ({ open, onClose }: ModalType) => {
  //const [panel, setPanel] = useState("app-setting");
  if (!open) return null;
  return (
    <Container>
      <div
        onClick={() => onClose(open)}
        className="h-screen bg-black bg-opacity-80 fixed inset-0 z-50 top-0 bottom-0 left-0 right-0"
      >
        <div
          onClick={e => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <img src={'/back-bainner.jpg'} alt="/" />
          <div className="modalRight">
            <p className="closeBtn" onClick={() => onClose(open)}>
              X
            </p>
            <div className="content">
              <div className="header-modal">
                <h3>Adicionar as configurações bancária</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Modal;
