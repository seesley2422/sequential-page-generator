
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { FormState, FormAction } from './types';
import { initialState } from './initialState';
import { formReducer } from './formReducer';

// Create context
const FormContext = createContext<{
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Provider component
export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

// Hook to use the form context
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
