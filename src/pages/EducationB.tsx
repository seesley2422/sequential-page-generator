
import React, { useEffect } from 'react';
import { useFormContext } from '@/context/FormContextB';

const EducationB = () => {
  const { dispatch } = useFormContext();
  
  // Ensure current step is set to 2 when this component is mounted
  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 2 });
  }, [dispatch]);
  
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl text-fubon-blue font-medium mb-4">學經歷/證照</h2>
      <p className="text-gray-500 italic">此為版本B的學經歷頁面，功能與版本A相同</p>
    </div>
  );
};

export default EducationB;
