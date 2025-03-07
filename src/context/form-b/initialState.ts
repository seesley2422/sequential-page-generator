
import { FormState } from './types';

// Create initial state
export const initialState: FormState = {
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
