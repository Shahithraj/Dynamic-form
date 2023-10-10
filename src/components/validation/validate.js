export default function Validate(fieldObj) {
  let errors = {};
  let { label, value, required, type, min, max } = fieldObj;
  type = type.toLowerCase();
  if (type == 'checkbox' && required == 'Yes') {
    if (value.length <= 0) {
      errors[label] = 'Please choose any one';
    }
  } else if (
    (type == 'dropdown' || type == 'radio') &&
    required == 'Yes' &&
    !value
  ) {
    errors[label] = 'Please select any one';
  } else if (type == 'text' || type == 'textarea') {
    if (!value && !value.trim() && required == 'Yes') {
      errors[label] = 'Please enter the value';
    } else if (min && min > value.length) {
      errors[label] = `Minimum ${min} characters is required`;
    } else if (max && max < value.length) {
      errors[label] = `Maximum ${max} characters is allowed`;
    }
  }

  return errors;
}
