import React from 'react';
import Modal from 'react-modal';
import { Div, ModalTitle } from '../common';
import RightContent from './ModalComponents/RightContent';
import LeftContent from './ModalComponents/LeftContent';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '60%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#181B27',
    border: 'none'
  }
};

interface Props {
  modalOpen: boolean;
  setIsOpen: any;
}
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0 ,0 ,0 ,.8 )';
Modal.setAppElement('body');
const AddTaskModal = ({ modalOpen, setIsOpen }: Props) => {

  const afterOpenModal = () => {

  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (

    <Div className="create-task-wrapper" id="createTask-modal">
          <Div className="create-task">
            <Modal
              isOpen={modalOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >

            <ModalTitle>Task Creation</ModalTitle>
            <Div className="j-row flex-align-top">
              <LeftContent/>
              <RightContent/>
            </Div>
            <div className="j-row">
              <div className="col-12">
                <div className="add-task popup flex-center d-flex m-0 pt-20">
                  <button id="created-task-btn" className="plus-btn">
                    <i className="fas fa-plus"/>
                  </button>
                  <span>Create Tasks</span>
                </div>
              </div>
            </div>
            </Modal>
          </Div>

    </Div>

  );

};

export default AddTaskModal;
