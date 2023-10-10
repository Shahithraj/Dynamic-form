import React, { useState } from 'react';
import './Modal.css';
import Input from '../custom/Input';
import Button from '../custom/Button';
import DropDown from '../custom/DropDown';
import CheckBox from '../custom/CheckBox';
import Radio from '../custom/Radio';
import AddValues from './AddValues';

const Modal = ({ fields, setFields, setOpenModal }) => {
  const [error, setError] = useState({
    label: '',
    type: '',
    multipleValueIdx: null,
  });
  const [input, setInput] = useState('');
  const modalFields = [
    {
      name: 'label',
      type: 'text',
      placeholder: 'Enter the label',
    },
    {
      name: 'type',
      type: 'dropdown',
      placeholder: 'Choose Type',
      labels: ['Text', 'Number', 'TextArea', 'Checkbox', 'Radio', 'DropDown'],
    },
    // {
    //   name: 'required',
    //   type: 'checkbox',
    //   labels: ['Yes', 'No'],
    // },
  ];
  const [properties, setProperties] = useState({
    label: '',
    type: '',
    value: '',
    min: '',
    max: '',
    required: false,
    specificity: '',
    labels: [],
  });

  const [multipleValues, setMultipleValues] = useState(['']);
  const handleProperties = (e) => {
    const { name, value } = e.target;
    if (value == 'DropDown') {
    }
    setError('');
    let updatedProperty = { ...properties };
    updatedProperty[name] = value;
    setProperties(updatedProperty);
  };
  const getField = (field) => {
    switch (field.type) {
      case 'text':
        return (
          <Input
            className="input"
            id={field.name}
            type={field.type}
            name={field.name}
            value={properties[field.name]}
            placeholder={field.placeholder}
            handleChange={handleProperties}
          />
        );
      case 'dropdown':
        return (
          <DropDown
            className="dropdown"
            type={field.type}
            name={field.name}
            value={properties[field.name]}
            placeholder={field.placeholder}
            id={field.name}
            labels={field.labels}
            handleChange={handleProperties}
          />
        );
      case 'checkbox':
        return (
          <CheckBox className=" checkbox" handleChange={handleProperties} />
        );
      case 'radio':
        return <Radio className=" radio" handleChange={handleProperties} />;
    }
  };

  const handleSave = () => {
    let newErr = { ...error };

    if (properties.label.trim() && properties.type) {
      for (let i = 0; i < multipleValues.length; i++) {
        let val = multipleValues[i];
        if (!val) {
          newErr.multipleValueIdx = i;
          setError(newErr);
          return;
        }
      }
      if (multipleValues.length > 1) {
        properties.labels = [...multipleValues];
      }

      let newArray = [...fields];
      newArray.push(properties);
      setFields(newArray);
      setOpenModal(false);
    } else if (!properties.label.trim()) {
      newErr.label = 'Please enter the label';
      setError(newErr);
    } else if (!properties.type) {
      newErr.type = 'Please choose the label';
      setError(newErr);
    }
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="form-modal">
      <div className="modal-overlay">
        <div className="modal-header">
          <h2>Field Property</h2>
          <span className="close-btn" onClick={closeModal}>
            X
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-fields">
            {modalFields.map((field, index) => (
              <div className="modal-body-field">
                <div className="field-form">{getField(field)}</div>
                <span className="err-msg">
                  {error[field.name] && error[field.name]}
                </span>
              </div>
            ))}
          </div>
          {(properties.type == 'DropDown' ||
            properties.type == 'Checkbox' ||
            properties.type == 'Radio') && (
            <AddValues
              multipleValues={multipleValues}
              setMultipleValues={setMultipleValues}
              error={error}
              setError={setError}
            />
          )}
          <div className="modal-btn">
            <Button className="save" value="Save" onclick={handleSave} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
