import React from 'react';

const Input = ({
  className,
  placeholder,
  id,
  name,
  type,
  value,
  handleChange,
  required,
}) => {
  return (
    <div className="input">
      <input
        className={className}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Input;
