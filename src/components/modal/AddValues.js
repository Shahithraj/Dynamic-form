import React from 'react';
import Input from '../custom/Input';
import Button from '../custom/Button';

const AddValues = ({ setMultipleValues, multipleValues, error, setError }) => {
  const addInputBox = () => {
    let newUpdatedValue = [...multipleValues, ''];
    setMultipleValues(newUpdatedValue);
  };

  const updateValue = (e, index) => {
    let newErr = { ...error };
    newErr.multipleValueIdx = null;
    setError(newErr);
    const { value } = e.target;
    let updateArray = [...multipleValues];
    updateArray[index] = value;
    setMultipleValues(updateArray);
  };

  const RemoveInput = (index) => {
    const updatedInputList = [...multipleValues];
    updatedInputList.splice(index, 1);
    setMultipleValues(updatedInputList);
  };

  return (
    <div className="addValues">
      {multipleValues.length > 0 &&
        multipleValues.map((val, index) => (
          <div className="single-addForm">
            <div>
              <Input
                placeholder="Enter Value"
                type="text"
                value={val}
                id={index}
                handleChange={(e) => updateValue(e, index)}
              />
              <Button
                className="danger"
                value="Remove"
                onclick={() => RemoveInput(index)}
              />
            </div>
            {error.multipleValueIdx == index && (
              <span className="err-msg">Please enter the value</span>
            )}
          </div>
        ))}
      <Button className="add" value="Add" onclick={addInputBox} />
    </div>
  );
};

export default AddValues;
