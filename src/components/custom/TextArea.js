import React from 'react';

const TextArea = ({
  className,
  placeholder,
  id,
  name,
  type,
  value,
  handleChange,
}) => {
  return (
      <textarea
        className={className}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
        cols="50"
        rows="5"
      ></textarea>
  );
};

export default TextArea;
