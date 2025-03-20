
import React, { useEffect } from 'react';
import { useFormContext } from '@/context/FormContextC';
import TextareaCustom from '@/components/ui/textarea-custom';

const AutobiographyC = () => {
  const { state, dispatch } = useFormContext();
  
  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 3 });
  }, [dispatch]);
  
  const handleBiographyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ 
      type: 'UPDATE_BIOGRAPHY', 
      payload: e.target.value 
    });
  };
  
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">自傳</h2>
      
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 rounded-md text-gray-700">
          <p>請簡述您的家庭背景、求學經歷、個人特質、工作經驗及對本職務的期許等。</p>
        </div>
        
        <TextareaCustom
          value={state.biography}
          onChange={handleBiographyChange}
          placeholder="請輸入自傳內容"
          className="min-h-[300px] w-full"
        />
      </div>
    </div>
  );
};

export default AutobiographyC;
