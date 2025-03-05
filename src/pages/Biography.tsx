
import React from 'react';
import { useFormContext } from '@/context/FormContext';

const Biography = () => {
  const { state, dispatch } = useFormContext();
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: 'UPDATE_BIOGRAPHY',
      payload: e.target.value
    });
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-xl text-fubon-blue font-medium mb-4">其他事項</h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          自傳(請您於社團/工作經歷、競爭優勢、工作動機、未來五年職涯及學習規劃、曾獲殊榮等說明)
        </label>
        <textarea 
          className="w-full h-64 p-4 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-fubon-blue"
          value={state.biography}
          onChange={handleChange}
        ></textarea>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <div className="bg-gray-50 p-4 rounded">
          <p className="font-medium mb-2">曾獲殊榮：</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>全國大學生程式設計大賽一等獎</li>
            <li>校級優秀學生兩次獲選</li>
            <li>ABC科技公司優秀實習生獎章</li>
            <li>國際開源軟體比賽優勝獎</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Biography;
