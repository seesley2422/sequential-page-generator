
import { FormState, FormAction } from './types';
import { v4 as uuidv4 } from 'uuid';

// Reducer for Form C
export function formReducer(state: FormState, action: FormAction): FormState {
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
    case 'ADD_WORK_LOCATION':
      return {
        ...state,
        basicInfo: {
          ...state.basicInfo,
          workLocations: [...state.basicInfo.workLocations, 
            { ...action.payload, id: action.payload.id || uuidv4() }
          ],
        },
      };
    case 'REMOVE_WORK_LOCATION':
      return {
        ...state,
        basicInfo: {
          ...state.basicInfo,
          workLocations: state.basicInfo.workLocations.filter(
            location => location.id !== action.payload
          ),
        },
      };
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        education: {
          ...state.education,
          ...action.payload,
        },
      };
    case 'ADD_UNIVERSITY':
      return {
        ...state,
        education: {
          ...state.education,
          universities: [...state.education.universities, 
            { ...action.payload, id: action.payload.id || uuidv4() }
          ],
        },
      };
    case 'REMOVE_UNIVERSITY':
      return {
        ...state,
        education: {
          ...state.education,
          universities: state.education.universities.filter(
            uni => uni.id !== action.payload
          ),
        },
      };
    case 'ADD_PROFESSIONAL_CERTIFICATE':
      return {
        ...state,
        education: {
          ...state.education,
          professionalCertificates: [...state.education.professionalCertificates, 
            { ...action.payload, id: action.payload.id || uuidv4() }
          ],
        },
      };
    case 'REMOVE_PROFESSIONAL_CERTIFICATE':
      return {
        ...state,
        education: {
          ...state.education,
          professionalCertificates: state.education.professionalCertificates.filter(
            cert => cert.id !== action.payload
          ),
        },
      };
    case 'ADD_CERTIFICATE':
      return {
        ...state,
        education: {
          ...state.education,
          certificates: [...state.education.certificates, 
            { ...action.payload, id: action.payload.id || uuidv4() }
          ],
        },
      };
    case 'REMOVE_CERTIFICATE':
      return {
        ...state,
        education: {
          ...state.education,
          certificates: state.education.certificates.filter(
            cert => cert.id !== action.payload
          ),
        },
      };
    case 'ADD_WORK_EXPERIENCE':
      return {
        ...state,
        education: {
          ...state.education,
          workExperiences: [...state.education.workExperiences, 
            { ...action.payload, id: action.payload.id || uuidv4() }
          ],
        },
      };
    case 'REMOVE_WORK_EXPERIENCE':
      return {
        ...state,
        education: {
          ...state.education,
          workExperiences: state.education.workExperiences.filter(
            exp => exp.id !== action.payload
          ),
        },
      };
    case 'ADD_OTHER_LANGUAGE_TEST':
      return {
        ...state,
        education: {
          ...state.education,
          languages: {
            ...state.education.languages,
            otherTest: [...state.education.languages.otherTest, action.payload],
          },
        },
      };
    case 'REMOVE_OTHER_LANGUAGE_TEST':
      return {
        ...state,
        education: {
          ...state.education,
          languages: {
            ...state.education.languages,
            otherTest: state.education.languages.otherTest.filter((_, index) => index !== action.payload),
          },
        },
      };
    case 'ADD_OTHER_LANGUAGE':
      return {
        ...state,
        education: {
          ...state.education,
          languages: {
            ...state.education.languages,
            otherLanguages: [...state.education.languages.otherLanguages, 
              { ...action.payload, id: action.payload.id || uuidv4() }
            ],
          },
        },
      };
    case 'REMOVE_OTHER_LANGUAGE':
      return {
        ...state,
        education: {
          ...state.education,
          languages: {
            ...state.education.languages,
            otherLanguages: state.education.languages.otherLanguages.filter(
              lang => lang.id !== action.payload
            ),
          },
        },
      };
    case 'UPDATE_WORK_EXPERIENCE':
      return {
        ...state,
        workExperience: {
          ...state.workExperience,
          ...action.payload,
        },
      };
    case 'ADD_COMPANY':
      return {
        ...state,
        workExperience: {
          ...state.workExperience,
          companies: [...state.workExperience.companies, 
            { ...action.payload, id: action.payload.id || uuidv4() }
          ],
        },
      };
    case 'REMOVE_COMPANY':
      return {
        ...state,
        workExperience: {
          ...state.workExperience,
          companies: state.workExperience.companies.filter(
            company => company.id !== action.payload
          ),
        },
      };
    case 'UPDATE_CERTIFICATION':
      return {
        ...state,
        certification: {
          ...state.certification,
          ...action.payload,
        },
      };
    case 'ADD_CERTIFICATE_OLD':
      return {
        ...state,
        certification: {
          ...state.certification,
          certificates: [...state.certification.certificates, 
            { ...action.payload, id: action.payload.id || uuidv4() }
          ],
        },
      };
    case 'REMOVE_CERTIFICATE_OLD':
      return {
        ...state,
        certification: {
          ...state.certification,
          certificates: state.certification.certificates.filter(
            cert => cert.id !== action.payload
          ),
        },
      };
    case 'UPDATE_BIOGRAPHY':
      return {
        ...state,
        biography: action.payload,
      };
    case 'UPDATE_UPLOADED_FILE':
      return {
        ...state,
        uploadedFiles: {
          ...state.uploadedFiles,
          [action.payload.key]: action.payload.value,
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
}
