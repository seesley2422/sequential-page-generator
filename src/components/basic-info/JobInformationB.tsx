
import React from 'react';
import { useFormContext } from '@/context/FormContextB';

const JobInformationB = () => {
  const { state, dispatch } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    dispatch({ 
      type: 'UPDATE_BASIC_INFO', 
      payload: { [e.target.name]: e.target.value } 
    });
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl text-fubon-blue font-medium mb-4">職缺資訊</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
              應徵職缺
            </label>
            <input
              type="text"
              id="jobTitle"
              disabled
              value="財管商品協銷人員 FA"
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
          
          <div>
            <label htmlFor="salaryExpectation" className="block text-sm font-medium text-gray-700 mb-1">
              期望月薪 <span className="text-red-500">*</span>
            </label>
            <select
              id="salaryExpectation"
              name="salaryExpectation"
              value={state.basicInfo.salaryExpectation}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">請選擇</option>
              <option value="35000-40000">35,000-40,000</option>
              <option value="40000-45000">40,000-45,000</option>
              <option value="45000-50000">45,000-50,000</option>
              <option value="50000以上">50,000以上</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="resumeName" className="block text-sm font-medium text-gray-700 mb-1">
              職缺履歷名稱 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="resumeName"
              name="resumeName"
              value={state.resumeName}
              onChange={(e) => dispatch({ type: 'UPDATE_RESUME_NAME', payload: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="availableDate" className="block text-sm font-medium text-gray-700 mb-1">
              錄取後可報到日 <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="availableDate"
              name="availableDate"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInformationB;
