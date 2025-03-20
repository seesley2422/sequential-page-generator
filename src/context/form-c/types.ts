
// Form state types for Version C
export interface FormState {
  currentStep: number;
  basicInfo: {
    availableDate: string;
    customAvailableDate: string;
    workLocations: {
      city: string;
      district: string;
      id: string;
    }[];
    chineseName: string;
    englishName: string;
    englishNickname: string;
    birthdate: string;
    photo: string;
    nationalityTW: boolean;
    nationalityOther: boolean;
    nationalityOtherText: string;
    identityType: '身分證' | '居留證' | '護照';
    identityNumber: string;
    militaryStatus: '免役' | '未役' | '役畢' | '服役中';
    militaryExemptReason: string;
    militaryCompletionDate: string;
    militaryExpectedCompletionDate: string;
    homePhone: string;
    homePhoneNumber: string;
    mobilePhone: string;
    mobilePhoneNumber: string;
    email: string;
    addressCity: string;
    addressDistrict: string;
    addressDetail: string;
  };
  education: {
    highestDegree: string;
    universities: {
      id: string;
      name: string;
      department: string;
      degree: string;
      country: string;
      graduationStatus: string;
      startDate: string;
      endDate: string;
      otherDegree?: string;
    }[];
    professionalCertificates: {
      id: string;
      name: string;
      date: string;
    }[];
    certificates: {
      id: string;
      name: string;
      date: string;
    }[];
    workExperiences: {
      id: string;
      companyName: string;
      jobTitle: string;
      jobTitleDetail: string;
      responsibilities: string;
      startDate: string;
      endDate: string;
      isPresent: boolean;
      salaryType: string;
      salaryAmount: string;
      reasonForLeaving: string;
    }[];
    expectedSalary: {
      type: string;
      amount: string;
    };
    languages: {
      english: {
        listening: string;
        speaking: string;
        reading: string;
        writing: string;
      };
      taiwanese: string;
      englishTest: {
        name: string;
        score: string;
        date: string;
      };
      otherTest: {
        id: string;
        name: string;
        otherName: string;
        score: string;
        date: string;
      }[];
      otherLanguages: {
        id: string;
        name: string;
        otherName: string;
        listening: string;
        speaking: string;
        reading: string;
        writing: string;
      }[];
    };
    otherSkills: string;
  };
  workExperience: {
    hasExperience: boolean;
    companies: {
      id: string;
      name: string;
      department: string;
      position: string;
      startDate: string;
      endDate: string;
      isPresent: boolean;
    }[];
  };
  certification: {
    hasCertifications: boolean;
    certificates: {
      id: string;
      name: string;
      issuer: string;
      date: string;
    }[];
  };
  biography: string;
  uploadedFiles: {
    [key: string]: string;
  };
  declaration: {
    signature: string;
  };
  resumeName: string;
}

export type FormAction =
  | { type: 'SET_CURRENT_STEP'; payload: number }
  | { type: 'UPDATE_BASIC_INFO'; payload: Partial<FormState['basicInfo']> }
  | { type: 'ADD_WORK_LOCATION'; payload: { city: string; district: string; id: string } }
  | { type: 'REMOVE_WORK_LOCATION'; payload: string }
  | { type: 'UPDATE_EDUCATION'; payload: Partial<FormState['education']> }
  | { type: 'ADD_UNIVERSITY'; payload: FormState['education']['universities'][0] }
  | { type: 'REMOVE_UNIVERSITY'; payload: string }
  | { type: 'ADD_PROFESSIONAL_CERTIFICATE'; payload: FormState['education']['professionalCertificates'][0] }
  | { type: 'REMOVE_PROFESSIONAL_CERTIFICATE'; payload: string }
  | { type: 'ADD_CERTIFICATE'; payload: FormState['education']['certificates'][0] }
  | { type: 'REMOVE_CERTIFICATE'; payload: string }
  | { type: 'ADD_WORK_EXPERIENCE'; payload: FormState['education']['workExperiences'][0] }
  | { type: 'REMOVE_WORK_EXPERIENCE'; payload: string }
  | { type: 'ADD_OTHER_LANGUAGE_TEST'; payload: FormState['education']['languages']['otherTest'][0] }
  | { type: 'REMOVE_OTHER_LANGUAGE_TEST'; payload: number }
  | { type: 'ADD_OTHER_LANGUAGE'; payload: FormState['education']['languages']['otherLanguages'][0] }
  | { type: 'REMOVE_OTHER_LANGUAGE'; payload: string }
  | { type: 'UPDATE_WORK_EXPERIENCE'; payload: Partial<FormState['workExperience']> }
  | { type: 'ADD_COMPANY'; payload: FormState['workExperience']['companies'][0] }
  | { type: 'REMOVE_COMPANY'; payload: string }
  | { type: 'UPDATE_CERTIFICATION'; payload: Partial<FormState['certification']> }
  | { type: 'ADD_CERTIFICATE_OLD'; payload: FormState['certification']['certificates'][0] }
  | { type: 'REMOVE_CERTIFICATE_OLD'; payload: string }
  | { type: 'UPDATE_BIOGRAPHY'; payload: string }
  | { type: 'UPDATE_UPLOADED_FILE'; payload: { key: string; value: string } }
  | { type: 'UPDATE_DECLARATION'; payload: Partial<FormState['declaration']> }
  | { type: 'UPDATE_RESUME_NAME'; payload: string };
