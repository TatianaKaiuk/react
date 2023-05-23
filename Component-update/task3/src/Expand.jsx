import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  hideContent = () => {
    this.setState({
      isOpen: false,
    });
  };

  showContent = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
     if (!this.state.isOpen) {
       return (
         <button className="expand__toggle-btn" onClick={this.showContent}>
           <i className="fa-solid fa-arrow-down"></i>
         </button>
       );
     }
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.hideContent}>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
        <div className="expand__content">{this.props.children}</div>
      </div>
    );
  }
}

Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  
};
Expand.defaultProps = {
  isOpen: false,
  title: '',
};

export default Expand;
