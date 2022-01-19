import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

function ToastComponent(){
  return(
    <ToastContainer 
      className="p-3" 
      position={"top-end"} 
      delay={500} 
      >
      <Toast bg={"Light"}>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Felicitaciones!!!</strong>
          <small>Ahora</small>
        </Toast.Header>
        <Toast.Body>
          Se ha registrado su nuevo producto
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default ToastComponent;
