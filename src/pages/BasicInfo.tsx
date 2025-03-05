
import React from 'react';
import { useFormContext } from '@/context/FormContext';

const BasicInfo = () => {
  const { state, dispatch } = useFormContext();
  const { basicInfo, contactInfo } = state;

  const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'radio' || type === 'checkbox') {
      dispatch({
        type: 'UPDATE_BASIC_INFO',
        payload: { [name]: checked }
      });
    } else {
      dispatch({
        type: 'UPDATE_BASIC_INFO',
        payload: { [name]: value }
      });
    }
  };

  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_CONTACT_INFO',
      payload: { [name]: value }
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="text-xl text-fubon-blue font-medium mb-4">職缺資訊</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="jobTitle" className="fubon-label">應徵職缺</label>
            <input
              type="text"
              id="jobTitle"
              className="fubon-input bg-gray-100"
              value="財管商品協銷人員"
              readOnly
            />
          </div>
          
          <div>
            <label htmlFor="applyDate" className="fubon-label">最近半年內二吋半身照(請附照片) *</label>
            <div className="border border-gray-300 rounded p-4 h-40 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-500">點選上傳檔案</span>
                <p className="text-xs text-gray-400 mt-1">(檔案大小限制2MB，支援JPG)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label htmlFor="availableDate" className="fubon-label">錄取後可報到日 *</label>
            <input
              type="date"
              id="availableDate"
              name="availableDate"
              className="fubon-input"
              value="2023-10-01"
              onChange={handleBasicInfoChange}
            />
          </div>

          <div>
            <label htmlFor="workLocation" className="fubon-label">希望工作地點 *</label>
            <select className="fubon-input">
              <option>Select Form</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl text-fubon-blue font-medium mb-4">個人基本資料</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="chineseName" className="fubon-label">中文姓名 *</label>
            <input
              type="text"
              id="chineseName"
              name="chineseName"
              className="fubon-input"
              value={basicInfo.chineseName}
              onChange={handleBasicInfoChange}
            />
          </div>

          <div>
            <label htmlFor="englishName" className="fubon-label">英文姓名 *</label>
            <input
              type="text"
              id="englishName"
              name="englishName"
              className="fubon-input"
              value={basicInfo.englishName}
              onChange={handleBasicInfoChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label htmlFor="birthdate" className="fubon-label">出生日期 (西元年/月/日) *</label>
            <input
              type="text"
              id="birthdate"
              name="birthdate"
              className="fubon-input"
              value={basicInfo.birthdate}
              onChange={handleBasicInfoChange}
            />
          </div>

          <div>
            <label htmlFor="englishNickname" className="fubon-label">英文別名 *</label>
            <input
              type="text"
              id="englishNickname"
              name="englishNickname"
              className="fubon-input"
              value={basicInfo.englishNickname}
              onChange={handleBasicInfoChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label className="fubon-label">國籍 *</label>
            <div className="flex items-center space-x-4 mt-2">
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="nationalityTW"
                  checked={basicInfo.nationalityTW}
                  onChange={handleBasicInfoChange}
                  className="form-radio h-4 w-4 text-fubon-blue"
                />
                <span className="ml-2">中華民國</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="nationalityOther"
                  checked={!basicInfo.nationalityTW}
                  onChange={(e) => handleBasicInfoChange({
                    ...e,
                    target: {
                      ...e.target,
                      name: 'nationalityTW',
                      checked: false
                    }
                  } as any)}
                  className="form-radio h-4 w-4 text-fubon-blue"
                />
                <span className="ml-2">其他</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="nationalityOther" className="fubon-label">國籍 *</label>
            <input
              type="text"
              id="nationalityOther"
              name="nationalityOther"
              className="fubon-input"
              value={basicInfo.nationalityOther}
              onChange={handleBasicInfoChange}
              disabled={basicInfo.nationalityTW}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label className="fubon-label">兵役狀態 *</label>
            <div className="flex items-center space-x-4 mt-2">
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="militaryStatus"
                  value="役畢"
                  className="form-radio h-4 w-4 text-fubon-blue"
                />
                <span className="ml-2">役畢</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="militaryStatus"
                  value="未役"
                  className="form-radio h-4 w-4 text-fubon-blue"
                />
                <span className="ml-2">未役</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="militaryStatus"
                  value="免役"
                  className="form-radio h-4 w-4 text-fubon-blue"
                  defaultChecked
                />
                <span className="ml-2">免役</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="militaryStatus"
                  value="服役中"
                  className="form-radio h-4 w-4 text-fubon-blue"
                />
                <span className="ml-2">服役中</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="residentStatus" className="fubon-label">僑居較明(設籍年月或免設原因) *</label>
            <input
              type="text"
              id="residentStatus"
              name="residentStatus"
              className="fubon-input"
              value={basicInfo.residentStatus}
              onChange={handleBasicInfoChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label className="fubon-label">繼續類別 *</label>
            <div className="flex items-center space-x-4 mt-2">
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="continuityType"
                  value="身分證字號"
                  className="form-radio h-4 w-4 text-fubon-blue"
                />
                <span className="ml-2">身分證字號</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="continuityType"
                  value="護照號碼"
                  className="form-radio h-4 w-4 text-fubon-blue"
                />
                <span className="ml-2">護照號碼</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="continuityType"
                  value="居留證號"
                  className="form-radio h-4 w-4 text-fubon-blue"
                  defaultChecked
                />
                <span className="ml-2">居留證號</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="identityNumber" className="fubon-label">居留證號 *</label>
            <input
              type="text"
              id="identityNumber"
              name="identityNumber"
              className="fubon-input"
              value={basicInfo.identityNumber}
              onChange={handleBasicInfoChange}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl text-fubon-blue font-medium mb-4">聯絡資訊</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="homePhone" className="fubon-label">連絡電話</label>
            <input
              type="text"
              id="homePhone"
              name="homePhone"
              className="fubon-input"
              placeholder="Placeholder text"
              value={contactInfo.homePhone}
              onChange={handleContactInfoChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="fubon-label">電子郵件信箱 *</label>
            <input
              type="email"
              id="email"
              name="email"
              className="fubon-input"
              value={contactInfo.email}
              onChange={handleContactInfoChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label htmlFor="mobilePhone" className="fubon-label">手機電話 *</label>
            <input
              type="text"
              id="mobilePhone"
              name="mobilePhone"
              className="fubon-input"
              value={contactInfo.mobilePhone}
              onChange={handleContactInfoChange}
            />
          </div>

          <div>
            <label htmlFor="address" className="fubon-label">通訊地址 *</label>
            <input
              type="text"
              id="address"
              name="address"
              className="fubon-input"
              value={contactInfo.address}
              onChange={handleContactInfoChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
