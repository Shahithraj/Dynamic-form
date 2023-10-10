import { createContext, useContext, useEffect, useReducer } from 'react';

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [FormState, FormDispatch] = useReducer(,)
  
  useEffect(() => {

  }[FormState]);

  return <FormContext.Provider>{children}</FormContext.Provider>;
};

export default FormContextProvider;
