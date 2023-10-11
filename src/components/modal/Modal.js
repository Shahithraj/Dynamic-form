import React, { useState } from 'react';
import './Modal.css';
import Input from '../custom/Input';
import Button from '../custom/Button';
import DropDown from '../custom/DropDown';
import CheckBox from '../custom/CheckBox';
import Radio from '../custom/Radio';
import AddValues from './AddValues';

const Modal = ({ fields, setFields, setOpenModal, setJson }) => {
  const [error, setError] = useState({
    label: '',
    type: '',
    multipleValueIdx: null,
  });
  const [input, setInput] = useState('');
  const [showMinMax, setShowMinMax] = useState(false);
  const [multipleValues, setMultipleValues] = useState(['']);

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
      labels: ['Text', 'TextArea', 'Checkbox', 'Radio', 'DropDown', 'Email'],
    },
    {
      name: 'required',
      type: 'radio',
      label: 'Required',
      labels: ['Yes', 'No'],
    },
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

  const handleProperties = (e) => {
    let { name, value, type, tagName } = e.target;
    setError('');

    let updatedProperty = { ...properties };
    updatedProperty[name] = value;
    if (
      updatedProperty.type.toLowerCase() == 'text' ||
      updatedProperty.type.toLowerCase() == 'textarea'
    ) {
      setShowMinMax(true);
    } else {
      setShowMinMax(false);
    }
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
            min={properties[field.min]}
            max={properties[field.max]}
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
        return (
          <Radio
            className="form radio"
            type={field.type}
            id={field.name}
            name={field.name}
            value={field.value}
            labels={field.labels}
            handleChange={handleProperties}
          />
        );
    }
  };

  const handleSave = () => {
    let newErr = { ...error };
    if (properties.label.trim() && properties.type) {
      setJson({});
      if (
        properties.type == 'DropDown' ||
        properties.type == 'Checkbox' ||
        properties.type == 'Radio'
      ) {
        for (let i = 0; i < multipleValues.length; i++) {
          let val = multipleValues[i];
          if (!val) {
            newErr.multipleValueIdx = i;
            setError(newErr);
            return;
          }
        }
        if (multipleValues.length >= 1 && multipleValues[0] != '') {
          properties.labels = [...multipleValues];
        }
      }

      let newArray = [...fields];
      if (properties.min > 0) {
        properties.required = 'Yes';
      }
      newArray.push(properties);
      setFields(newArray);
      setOpenModal(false);
    } else if (!properties.label.trim()) {
      newErr.label = 'Please enter the label';
      setError(newErr);
    } else if (!properties.type) {
      newErr.type = 'Please choose the type';
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
                <div className="label-form">
                  {field?.label && <label>{field?.label} :</label>}
                  <div className="field-form">{getField(field)}</div>
                </div>
                <span className="err-msg">
                  {error[field.name] && error[field.name]}
                </span>
              </div>
            ))}
          </div>
          {showMinMax && (
            <div className="minMax-container">
              <div className="single-minmax">
                <label for="minimum">Minimum Value : </label>
                <Input
                  id="minimum"
                  type="text"
                  placeholder="Enter min value"
                  value={properties.min}
                  name="min"
                  handleChange={handleProperties}
                />
              </div>
              <div className="single-minmax">
                <label for="minimum">Maximum Value : </label>
                <Input
                  id="minimum"
                  type="text"
                  placeholder="Enter max value"
                  value={properties.max}
                  name="max"
                  handleChange={handleProperties}
                />
              </div>
            </div>
          )}
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
