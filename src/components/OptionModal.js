import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    //the first tue properties are mandatory for a modal costitution
    isOpen = {!!props.selectedOption}
    onRequestClose={props.hideModal}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.hideModal}>Okey</button>
  </Modal>
);

export default OptionModal;