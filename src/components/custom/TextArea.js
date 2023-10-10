import React from 'react';

const TextArea = ({
  className,
  placeholder,
  id,
  name,
  type,
  value,
  handleChange,
  required
}) => {
  return (
    <div className='text-area'>
      <textarea
        className={className}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
        required = {required}
        cols="50"
        rows="5"
      ></textarea>
      </div>
  );
};

export default TextArea;
