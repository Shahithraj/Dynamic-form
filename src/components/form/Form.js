import React, { useContext, useState } from 'react';
import './Form.css';
import Input from '../custom/Input';
import DropDown from '../custom/DropDown';
import CheckBox from '../custom/CheckBox';
import Radio from '../custom/Radio';
import Button from '../custom/Button';
import TextArea from '../custom/TextArea';
import Validate from '../validation/validate';
import { FormContext } from '../../context/FormContext';

const Form = ({ fields, setFields, setJson }) => {
  const [error, setError] = useState({});
  const { formState, setFormState } = useContext(FormContext);
  const handleValueChange = (e, index) => {
    const { name, value, type, checked } = e.target;
    setError({});
    let updatedFieldList = [...fields];

    if (type == 'checkbox') {
      if (checked) {
        updatedFieldList[index].value = [
          ...updatedFieldList[index].value,
          value,
        ];
      } else {
        for (let i = 0; i < updatedFieldList[index].value.length; i++) {
          let val = updatedFieldList[index].value[i];
          if (val == value) {
            updatedFieldList[index].value.splice(i, 1);
          }
        }
      }
    } else {
      updatedFieldList[index].value = value;
    }
    setFields(updatedFieldList);
  };

  const getField = (field, index) => {
    let type = field.type.toLowerCase();
    let required = field.required == 'Yes' ? true : false;
    switch (type) {
      case 'text':
        return (
          <Input
            className="form input"
            type={field.type}
            name={field.label}
            value={field.value}
            placeholder={`Enter ${field.label}`}
            id={field.label}
            handleChange={(e) => handleValueChange(e, index)}
            required={required}
          />
        );
      case 'phone':
        return (
          <Input
            className="form input phone"
            type={field.type}
            name={field.label}
            value={field.value}
            placeholder={`Enter Phone Number `}
            id={field.label}
            handleChange={(e) => handleValueChange(e, index)}
            required={required}
          />
        );
      case 'email':
        return (
          <Input
            className="form input email"
            type={field.type}
            name={field.label}
            value={field.value}
            placeholder={`Enter  Email`}
            id={field.label}
            handleChange={(e) => handleValueChange(e, index)}
            required={required}
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
            required={required}
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
            required={required}
          />
        );
      case 'radio':
        return (
          <Radio
            className="form radio"
            type={field.type}
            id={field.label}
            name={field.label}
            value={field.value}
            labels={field.labels}
            handleChange={(e) => handleValueChange(e, index)}
            required={required}
          />
        );
      case 'textarea':
        return (
          <TextArea
            className="form input"
            type={field.type}
            name={field.label}
            placeholder={`Enter  ${field.label}`}
            value={field.value}
            id={field.label}
            handleChange={(e) => handleValueChange(e, index)}
            required={field.required}
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
    setError({});
    let allField = true;
    for (let i = 0; i < fields.length; i++) {
      let fieldObj = fields[i];
      let error = Validate(fieldObj);
      if (Object.keys(error).length > 0) {
        allField = false;
        setError((prev) => {
          return { ...prev, ...error };
        });
      } else {
        finalObj[fieldObj.label] = fieldObj.value;
      }
    }
    if (allField) {
      let finalData = [...formState];
      finalData.push(finalObj);
      setFormState(finalData);
      setJson(finalObj);
      setFields([]);
    }
  };

  return (
    <div className="form-container">
      {fields.map((field, index) => (
        <div key={field.id} className="single-field">
          <label htmlFor={field.label}>
            {field.label} :
            {field.required == 'Yes' && <span className="required">*</span>}
          </label>
          <div className="input-error">
            {getField(field, index)}
            {error[field.label] ? (
              <span className="err-msg">{error[field.label]} </span>
            ) : (
              <div></div>
            )}
          </div>
          <Button
            className="danger"
            value="Remove"
            onclick={() => RemoveField(index)}
          />
        </div>
      ))}
      <div className="modal-btn">
        <Button className="save" value="Submit" onclick={handleSubmit} />
      </div>
    </div>
  );
};

export default Form;
