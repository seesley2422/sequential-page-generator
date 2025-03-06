
import React from 'react';
import { useFormContext } from '@/context/FormContextB';

const PersonalInformation = () => {
  const { state, dispatch } = useFormContext();
  const { basicInfo } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    dispatch({
      type: 'UPDATE_BASIC_INFO',
      payload: { [e.target.name]: e.target.value }
    });
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl text-fubon-blue font-medium mb-4">個人資料</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="chineseName" className="block text-sm font-medium text-gray-700 mb-1">
              中文姓名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="chineseName"
              name="chineseName"
              value={basicInfo.chineseName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="englishName" className="block text-sm font-medium text-gray-700 mb-1">
              英文姓名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="englishName"
              name="englishName"
              value={basicInfo.englishName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-1">
              出生日期 <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={basicInfo.birthdate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="englishNickname" className="block text-sm font-medium text-gray-700 mb-1">
              英文別名
            </label>
            <input
              type="text"
              id="englishNickname"
              name="englishNickname"
              value={basicInfo.englishNickname}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">
              國籍 <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="nationalityTW"
                  checked={basicInfo.nationalityTW}
                  onChange={(e) => dispatch({
                    type: 'UPDATE_BASIC_INFO',
                    payload: { nationalityTW: e.target.checked }
                  })}
                  className="form-radio text-fubon-blue"
                />
                <span className="ml-2">中華民國</span>
              </label>
              
              <div className="flex items-center gap-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="nationalityTW"
                    checked={!basicInfo.nationalityTW}
                    onChange={(e) => dispatch({
                      type: 'UPDATE_BASIC_INFO',
                      payload: { nationalityTW: !e.target.checked }
                    })}
                    className="form-radio text-fubon-blue"
                  />
                  <span className="ml-2">其他</span>
                </label>
                
                {!basicInfo.nationalityTW && (
                  <input
                    type="text"
                    name="nationalityOther"
                    value={basicInfo.nationalityOther}
                    onChange={handleChange}
                    className="flex-1 p-2 border border-gray-300 rounded-md"
                    placeholder="請輸入國籍"
                  />
                )}
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="residentStatus" className="block text-sm font-medium text-gray-700 mb-1">
              居留狀況 <span className="text-red-500">*</span>
            </label>
            <select
              id="residentStatus"
              name="residentStatus"
              value={basicInfo.residentStatus}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">請選擇</option>
              <option value="本國國民">本國國民</option>
              <option value="非本國國民">非本國國民</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="identityType" className="block text-sm font-medium text-gray-700 mb-1">
              證件類型 <span className="text-red-500">*</span>
            </label>
            <select
              id="identityType"
              name="identityType"
              value={basicInfo.identityType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">請選擇</option>
              <option value="身分證字號">身分證字號</option>
              <option value="居留證號">居留證號</option>
              <option value="護照號碼">護照號碼</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="identityNumber" className="block text-sm font-medium text-gray-700 mb-1">
              證件號碼 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="identityNumber"
              name="identityNumber"
              value={basicInfo.identityNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
