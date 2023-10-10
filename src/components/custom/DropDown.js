import React from 'react';

const DropDown = ({
  labels,
  className,
  type,
  name,
  value,
  id,
  handleChange,
  placeholder,
  required
}) => {
  return (
    <div className="dropDown">
      <select
        className={className}
        name={name}
        id={id}
        type={type}
        onChange={(e) => handleChange(e)}
        required = {required}
      >
        <option value="none" selected disabled>
          {placeholder}
        </option>
        {labels.map((label, index) => (
          <option key={index} value={label}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
