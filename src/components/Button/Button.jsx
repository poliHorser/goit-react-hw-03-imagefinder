
import './Button.css'
import React from 'react';

const Button = ({ onClick, disabled }) => {

  return (
      <button className="Button"  id='Btn' onClick={onClick} disabled={disabled}>
        Load more
      </button>
    );
};

export default Button;


