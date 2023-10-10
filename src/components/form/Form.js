import React from 'react';
import './Form.css';
import Input from '../custom/Input';
import DropDown from '../custom/DropDown';
import CheckBox from '../custom/CheckBox';
import Radio from '../custom/Radio';
import Button from '../custom/Button';
import TextArea from '../custom/TextArea';

const Form = ({ fields, setFields }) => {
  const handleValueChange = (e, index) => {
    const { name, value } = e.target;
    let updatedFieldList = [...fields];
    updatedFieldList[index].value = value;
    setFields(updatedFieldList);
  };

  const getField = (field, index) => {
    let type = field.type.toLowerCase();
    switch (type) {
      case 'text':
        return (
          <Input
            className="form input"
            type={field.type}
            name={field.label}
            value={field.value}
            id={field.label}
            handleChange={(e) => handleValueChange(e, index)}
          />
        );
      case 'dropdown':
        return (
          <DropDown
            className="form dropdown"
            type={field.type}
            name={field.label}
            value={field.value}
            id={field.label}
            labels={field.labels}
            placeholder="Select a value"
            handleChange={(e) => handleValueChange(e, index)}
          />
        );
      case 'checkbox':
        return (
          <CheckBox
            className="form checkbox"
            type={field.type}
            id={field.label}
            name={field.label}
            value={field.value}
            labels={field.labels}
            handleChange={(e) => handleValueChange(e, index)}
          />
        );
      case 'radio':
        return (
          <Radio
            className="form radio"
            className="form checkbox"
            type={field.type}
            id={field.label}
            name={field.label}
            value={field.value}
            labels={field.labels}
            handleChange={(e) => handleValueChange(e, index)}
          />
        );
      case 'textarea':
        return (
          <TextArea
            className="form input"
            type={field.type}
            name={field.label}
            value={field.value}
            id={field.label}
            handleChange={(e) => handleValueChange(e, index)}
          />
        );
    }
  };

  const RemoveField = (id) => {
    let removeField = [...fields];
    removeField.splice(id, 1);
    setFields(removeField);
  };

  const handleSubmit = () => {
    let finalObj = {};
    for (let i = 0; i < fields.length; i++) {
      let fieldObj = fields[i];
      finalObj[fieldObj.label] = fieldObj.value;
    }
    console.log(finalObj, 'finalObj');
    // setFields('');
  };

  return (
    <div className="form-container">
      {fields.map((field, index) => (
        <div key={field.id} className="single-field">
          <label htmlFor={field.label}>{field.label} :</label>
          {getField(field, index)}
          <Button
            className="danger"
            value="Remove"
            onclick={() => RemoveField(index)}
          />
        </div>
      ))}
      <div className="modal-btn">
        <Button className="save" value="Save" onclick={handleSubmit} />
      </div>
    </div>
  );
};

export default Form;
