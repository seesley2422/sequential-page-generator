import React, { createContext, useContext, useReducer } from 'react';

// Define the form state
interface FormState {
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
    availableDate: string;  // Added this field
  };
  contactInfo: {
    homePhone: string;
    mobilePhone: string;
    email: string;
    address: string;
  };
  education: {
    // Education form fields
  };
  workExperience: {
    // Work experience fields
  };
  biography: string;
  uploadedFiles: {
    photo: string | null;
    resume: string | null;
  };
  declaration: {
    agreed: boolean;
    signature: string | null;
  };
  resumeName: string; // Added field for resume name
}

// Define the initial state
const initialState: FormState = {
  currentStep: 1,
  basicInfo: {
    chineseName: '王大明',
    englishName: 'Wang,Da-Ming',
    birthdate: '1986/12/31',
    englishNickname: 'Joey',
    nationalityTW: true,
    nationalityOther: '馬來西亞',
    residentStatus: '非本國國民',
    identityType: '居留證號',
    identityNumber: 'AC12345678',
    salaryExpectation: '45000-50000',
    availableDate: '',  // Added this field
  },
  contactInfo: {
    homePhone: '',
    mobilePhone: '0999999999',
    email: 'ming@gmail.com',
    address: '新北市板橋區中山路1段161號15樓',
  },
  education: {
    // Education initial values
  },
  workExperience: {
    // Work experience initial values
  },
  biography: '在大學期間，我積極參與多個社團活動，其中最值得一提的是我擔任程序設計社團社長的經歷。在這個角色中，我與其他成員共同策劃了多場計算機程序設計比賽，並組織了一系列講座，邀請行業專家來校分享經驗。此外，我還在實習期間於ABC科技公司擔任軟體開發實習生。在這段時間，我參與了多個項目，從需求分析到程式編寫，直到軟體測試和調試，全方位地鍛鍊了軟體開發的過程，並積累了豐富的實戰經驗。這些經歷豐富了我的專業知識，並提升了我的團隊合作能力。',
  uploadedFiles: {
    photo: null,
    resume: null,
  },
  declaration: {
    agreed: false,
    signature: null,
  },
  resumeName: '財管商品人員FA_陳大靜', // Default value
};

// Define action types
type Action = 
  | { type: 'SET_CURRENT_STEP'; payload: number }
  | { type: 'UPDATE_BASIC_INFO'; payload: Partial<FormState['basicInfo']> }
  | { type: 'UPDATE_CONTACT_INFO'; payload: Partial<FormState['contactInfo']> }
  | { type: 'UPDATE_BIOGRAPHY'; payload: string }
  | { type: 'UPDATE_UPLOADED_FILES'; payload: Partial<FormState['uploadedFiles']> }
  | { type: 'UPDATE_DECLARATION'; payload: Partial<FormState['declaration']> }
  | { type: 'UPDATE_RESUME_NAME'; payload: string };

// Create the reducer function
const formReducer = (state: FormState, action: Action): FormState => {
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

// Create the context
const FormContext = createContext<{
  state: FormState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

// Create the FormProvider component
export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

// Create a custom hook to use the FormContext
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
