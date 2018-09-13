import React from 'react';
import './Button.css';

export const Button = ({ children, ...rest }) => (
  <button className="Button" {...rest}>
    {children}
  </button>
);
