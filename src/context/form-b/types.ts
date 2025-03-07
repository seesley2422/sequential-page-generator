
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
export type FormAction =
  | { type: 'SET_CURRENT_STEP'; payload: number }
  | { type: 'UPDATE_BASIC_INFO'; payload: Partial<FormState['basicInfo']> }
  | { type: 'UPDATE_CONTACT_INFO'; payload: Partial<FormState['contactInfo']> }
  | { type: 'UPDATE_BIOGRAPHY'; payload: string }
  | { type: 'UPDATE_UPLOADED_FILES'; payload: Partial<FormState['uploadedFiles']> }
  | { type: 'UPDATE_DECLARATION'; payload: Partial<FormState['declaration']> }
  | { type: 'UPDATE_RESUME_NAME'; payload: string };
