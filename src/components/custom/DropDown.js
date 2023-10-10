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
}) => {
  return (
    <select name={name} id={id} onChange={(e) => handleChange(e)}>
      <option value="none" selected disabled>
        {placeholder}
      </option>
      {labels.map((label, index) => (
        <option key={index} value={label}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
