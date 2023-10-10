import { createContext, useEffect, useReducer } from 'react';
import FormReducer from './FormReducer';

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FormReducer, null);

  useEffect(() => {});

  return <FormContext.Provider>{children}</FormContext.Provider>;
};

export default FormContextProvider;
