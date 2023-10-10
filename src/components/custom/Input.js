import React from 'react';

const Input = ({
  className,
  placeholder,
  id,
  name,
  type,
  value,
  handleChange,
}) => {
  return (
    <input
      className={className}
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default Input;
