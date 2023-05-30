import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, show, setShow }) => {
    
  return ReactDOM.createPortal(
    <div className="mymodal"  >
      {children}
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
