
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Define types for form state
export interface FormState {
  currentStep: number;
  basicInfo: {
    chineseName: string;
    englishName: string;
    birthdate: string;
    englishNickname: string;
    nationalityTW: boolean;
    nationalityOther: string;
    residentStatus: string;
    identityType: string;
    identityNumber: string;
    salaryExpectation: string;
    availableDate: string;
  };
  contactInfo: {
    mobilePhone: string;
    homePhone: string;
    email: string;
    address: string;
  };
  education: {
    highestDegree: string;
    universities: Array<{
      name: string;
      department: string;
      degree: string;
      startDate: string;
      endDate: string;
    }>;
  };
  workExperience: {
    hasExperience: boolean;
    companies: Array<{
      name: string;
      position: string;
      startDate: string;
      endDate: string;
      isCurrentJob: boolean;
    }>;
  };
  certification: {
    hasCertifications: boolean;
    certificates: Array<{
      name: string;
      issuer: string;
      issueDate: string;
    }>;
  };
  uploadedFiles: {
    photo?: string;
    resume?: string;
    certificates?: string[];
  };
  biography: string;
  declaration: {
    signature: string;
  };
  resumeName: string;
}

// Define action types
type FormAction =
  | { type: 'SET_CURRENT_STEP'; payload: number }
  | { type: 'UPDATE_BASIC_INFO'; payload: Partial<FormState['basicInfo']> }
  | { type: 'UPDATE_CONTACT_INFO'; payload: Partial<FormState['contactInfo']> }
  | { type: 'UPDATE_BIOGRAPHY'; payload: string }
  | { type: 'UPDATE_UPLOADED_FILES'; payload: Partial<FormState['uploadedFiles']> }
  | { type: 'UPDATE_DECLARATION'; payload: Partial<FormState['declaration']> }
  | { type: 'UPDATE_RESUME_NAME'; payload: string };

// Create context with initial state
const initialState: FormState = {
  currentStep: 1,
  basicInfo: {
    chineseName: '',
    englishName: '',
    birthdate: '',
    englishNickname: '',
    nationalityTW: true,
    nationalityOther: '',
    residentStatus: '',
    identityType: 'identity-card',
    identityNumber: '',
    salaryExpectation: '',
    availableDate: '',
  },
  contactInfo: {
    mobilePhone: '',
    homePhone: '',
    email: '',
    address: '',
  },
  education: {
    highestDegree: '',
    universities: [],
  },
  workExperience: {
    hasExperience: false,
    companies: [],
  },
  certification: {
    hasCertifications: false,
    certificates: [],
  },
  uploadedFiles: {},
  biography: '',
  declaration: {
    signature: '',
  },
  resumeName: '',
};

// Create context
const FormContext = createContext<{
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Reducer function
const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SET_CURRENT_STEP':
      return {
        ...state,
        currentStep: action.payload,
      };
    case 'UPDATE_BASIC_INFO':
      return {
        ...state,
        basicInfo: {
          ...state.basicInfo,
          ...action.payload,
        },
      };
    case 'UPDATE_CONTACT_INFO':
      return {
        ...state,
        contactInfo: {
          ...state.contactInfo,
          ...action.payload,
        },
      };
    case 'UPDATE_BIOGRAPHY':
      return {
        ...state,
        biography: action.payload,
      };
    case 'UPDATE_UPLOADED_FILES':
      return {
        ...state,
        uploadedFiles: {
          ...state.uploadedFiles,
          ...action.payload,
        },
      };
    case 'UPDATE_DECLARATION':
      return {
        ...state,
        declaration: {
          ...state.declaration,
          ...action.payload,
        },
      };
    case 'UPDATE_RESUME_NAME':
      return {
        ...state,
        resumeName: action.payload,
      };
    default:
      return state;
  }
};

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
