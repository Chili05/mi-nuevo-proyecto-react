import React from 'react';
import '../styles/Modal.css';

const Modal = ({ isOpen, message, onConfirm, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{message}</h2>
        <div className="modal-actions">
          <button onClick={onConfirm}>Sí</button>
          <button onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
