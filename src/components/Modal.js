import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, show, setShow }) => {
    const modalStyle ={
        position:'fixed',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        backgroundColor:"grey",
        padding:"50px",
        zIndex:"1000"
    }
  return ReactDOM.createPortal(
    <div className="" style={modalStyle} >
      {children}
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
