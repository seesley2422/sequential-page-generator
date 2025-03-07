
import { FormState, FormAction } from './types';

// Reducer function
export const formReducer = (state: FormState, action: FormAction): FormState => {
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
