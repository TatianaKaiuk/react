import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
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
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
      <div className="expand__content">{children}</div>
    </div>
  );
};

export default Expand;
