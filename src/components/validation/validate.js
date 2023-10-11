export default function Validate(fieldObj) {
  let errors = {};
  let { label, value, required, type, min, max } = fieldObj;
  type = type.toLowerCase();
  if (type == 'checkbox' && required == 'Yes') {
    if (value.length <= 0) {
      errors[label] = 'Please choose atleast one';
    }
  } else if (type == 'email') {
    if (!value && !value.trim() && required == 'Yes') {
      errors[label] = 'Email is required';
    } else if (!validateEmail(value)) {
      errors[label] = 'Email is invalid';
    }
  } else if (type == 'phone') {
    if (!value && !value.trim() && required == 'Yes') {
      errors[label] = 'Number is required';
    } else if (!validatePhoneNumber(value)) {
      errors[label] = 'Number is invalid';
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

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
  let len = phoneNumber.length;
  for (let i = 0; i < len; i++) {
    let char = phoneNumber[i];
    if (!(char >= '0' && char <= '9')) {
      return false;
    }
  }
  if (len < 10) {
    return false;
  }
  return true;
}
