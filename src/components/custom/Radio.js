import React from 'react';

const Radio = ({
  className,
  id,
  name,
  type,
  value,
  labels,
  handleChange,
  required,
}) => {
  return (
    <div className="radio-container">
      {labels.map((label, index) => (
        <div key={index} className="radio-form">
          <input
            type={type}
            id={label}
            name={name}
            value={label}
            onChange={(e) => handleChange(e)}
            required={required}
          />
          <label htmlFor={label}>{label}</label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
