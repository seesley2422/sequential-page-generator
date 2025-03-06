
import React from 'react';
import { useFormContext } from '@/context/FormContextB';

const JobInformationB = () => {
  const { state, dispatch } = useFormContext();
  const { basicInfo } = state;

  const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label htmlFor="salaryExpectation" className="fubon-label">期望月薪 *</label>
          <div className="flex items-center">
            <select 
              className="fubon-input" 
              id="salaryExpectation" 
              name="salaryExpectation"
              value={basicInfo.salaryExpectation}
              onChange={handleBasicInfoChange}
            >
              <option value="">請選擇</option>
              <option value="35000-40000">35,000-40,000</option>
              <option value="40000-45000">40,000-45,000</option>
              <option value="45000-50000">45,000-50,000</option>
              <option value="50000-60000">50,000-60,000</option>
              <option value="60000+">60,000以上</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInformationB;
