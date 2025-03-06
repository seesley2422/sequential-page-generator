
import React from 'react';
import { useFormContext } from '@/context/FormContext';

const JobInformationA = () => {
  const { state, dispatch } = useFormContext();
  const { basicInfo } = state;

  const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_BASIC_INFO',
      payload: { [name]: value }
    });
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
          <label htmlFor="resumeName" className="fubon-label">職缺履歷名稱 *</label>
          <input
            type="text"
            id="resumeName"
            name="resumeName"
            className="fubon-input"
            value={basicInfo.resumeName}
            onChange={handleBasicInfoChange}
            required
          />
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
            value={basicInfo.availableDate || ''}
            onChange={handleBasicInfoChange}
          />
        </div>

        <div>
          <label htmlFor="salaryExpectation" className="fubon-label">期望月薪 *</label>
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
  );
};

export default JobInformationA;
