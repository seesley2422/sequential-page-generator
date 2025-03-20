
import { FormState } from './types';
import { v4 as uuidv4 } from 'uuid';

// Create initial state for Form C
export const initialState: FormState = {
  currentStep: 1,
  basicInfo: {
    availableDate: 'oneMonth',
    customAvailableDate: '2025-05-01',
    workLocations: [
      {
        id: uuidv4(),
        city: '臺北市',
        district: '中山區',
      }
    ],
    chineseName: '陳大靜',
    englishName: 'Ching Yi Chen',
    englishNickname: 'Seesley',
    birthdate: '1981-07-02',
    photo: '/lovable-uploads/placeholder-photo.jpg',
    nationalityTW: true,
    nationalityOther: true,
    nationalityOtherText: '凱龍星',
    identityType: '身分證',
    identityNumber: 'A103948279',
    militaryStatus: '役畢',
    militaryExemptReason: '',
    militaryCompletionDate: '2006-07',
    militaryExpectedCompletionDate: '',
    homePhone: '02',
    homePhoneNumber: '28825252',
    mobilePhone: '886',
    mobilePhoneNumber: '912887033',
    email: 'seesley@miniasp.com',
    addressCity: '臺北市',
    addressDistrict: '中山區',
    addressDetail: '中山北路一段82號7樓',
  },
  education: {
    highestDegree: '其他',
    universities: [
      {
        id: uuidv4(),
        name: '台灣大學',
        department: '資訊工程學系',
        degree: '碩士',
        country: '台灣',
        graduationStatus: '畢業',
        startDate: '2024-07',
        endDate: '2025-03',
        otherDegree: '在職進修'
      },
      {
        id: uuidv4(),
        name: '台灣大學',
        department: '資訊工程學系',
        degree: '碩士',
        country: '台灣',
        graduationStatus: '畢業',
        startDate: '2024-07',
        endDate: '2025-03',
        otherDegree: ''
      },
      {
        id: uuidv4(),
        name: '台灣大學',
        department: '資訊工程學系',
        degree: '其他',
        country: '台灣',
        graduationStatus: '',
        startDate: '2024-07',
        endDate: '2025-03',
        otherDegree: '在職進修'
      }
    ],
  },
  workExperience: {
    hasExperience: false,
    companies: [],
  },
  certification: {
    hasCertifications: false,
    certificates: [],
  },
  biography: '',
  uploadedFiles: {},
  declaration: {
    signature: '',
  },
  resumeName: '財管商品協銷人員FA_陳大靜',
};
