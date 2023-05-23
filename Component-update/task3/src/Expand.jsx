import React from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Expand = ({ children, title, isOpen, onClose, showContent }) => {
  // if (!isOpen) {
  //   return (
  //     <button className="expand__toggle-btn" onClick={showContent}>
  //       <FontAwesomeIcon icon={faArrowDown} />
  //     </button>
  //   );
  // }

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClose}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
      <div className="expand__content">{children}</div>
    </div>
  );
};

Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
Expand.defaultProps = {
  isOpen: false,
  title: '',
};


export default Expand;
