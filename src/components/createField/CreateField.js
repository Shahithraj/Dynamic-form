import React, { useEffect } from 'react';
import './CreateField.css';
import Button from '../custom/Button';

const CreateField = ({ fields, setOpenModal, setFields }) => {

  const addFormField = () => {
    setOpenModal(true);
  };

  return (
    <div className="create-field">
      <Button  value={`Add Field`} onclick={addFormField} />
    </div>
  );
};

export default CreateField;
