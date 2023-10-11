import React, { useEffect } from 'react';
import './CreateField.css';
import Button from '../custom/Button';

const CreateField = ({ fields, setOpenModal, setFields, json }) => {
  const addFormField = () => {
    setOpenModal(true);
  };

  return (
    <div className="create-field">
      <Button
        value={Object.keys(fields).length <= 0 ? `Create new ` : `Add Field`}
        onclick={addFormField}
      />
    </div>
  );
};

export default CreateField;
