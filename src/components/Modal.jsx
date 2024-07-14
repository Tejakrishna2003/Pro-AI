import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ title, children, modalOpen, setModalOpen }) => {
  const handleToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {modalOpen && (
        <div>
          <input
            type='checkbox'
            checked={modalOpen}
            onChange={handleToggle}
            className='modal-toggle'
          />
          <div className='modal'>
            <div className='relative modal-box'>
              <label onClick={handleToggle} className='absolute btn btn-sm btn-circle right-2 top-2'>
                ✕
              </label>
              <h3 className='text-lg font-bold'>{title}</h3>
              <div className='py-4'>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.defaultProps = {
  modalOpen: true,
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};

export default Modal;
