
import React, { useEffect } from 'react';
import { useFormContext } from '@/context/FormContextB';

const BiographyB = () => {
  const { state, dispatch } = useFormContext();
  
  // Ensure current step is set to 3 when this component is mounted
  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 3 });
  }, [dispatch]);
  
  const handleBiographyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: 'UPDATE_BIOGRAPHY', payload: e.target.value });
  };
  
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl text-fubon-blue font-medium mb-4">自傳</h2>
      <p className="text-gray-600 mb-4">
        請描述您的專長、經歷，以及為何想要加入我們的團隊。
      </p>
      
      <textarea
        value={state.biography}
        onChange={handleBiographyChange}
        className="w-full h-64 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fubon-blue focus:border-transparent"
        placeholder="請輸入自傳內容..."
      />
    </div>
  );
};

export default BiographyB;
