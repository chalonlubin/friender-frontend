import React from 'react';
import { Link } from 'react-router-dom';


/* Button Component */
const Button = ({ to, text, ...buttonProps }) => {
  return (
    <Link to={to}>
      <button className="btn btn-dark btn-lg" {...buttonProps}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
