
import React from 'react';
import { useFormContext } from '@/context/FormContext';

const PersonalInformation = () => {
  const { state, dispatch } = useFormContext();
  const { basicInfo } = state;

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

  return (
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
  );
};

export default PersonalInformation;
