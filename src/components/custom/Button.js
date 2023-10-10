import React from 'react';

const Button = ({ key, name, className, value, onclick }) => {
  return (
    <button key={key} name={name} className={className} onClick={onclick}>
      {value}
    </button>
  );
};

export default Button;
