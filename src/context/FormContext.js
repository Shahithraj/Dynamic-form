import { createContext, useEffect, useState } from 'react';

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const INITIAL_STATE = JSON.parse(localStorage.getItem('users'))
    ? JSON.parse(localStorage.getItem('users'))
    : [];
  const [formState, setFormState] = useState(INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(formState));
  }, [formState]);

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
