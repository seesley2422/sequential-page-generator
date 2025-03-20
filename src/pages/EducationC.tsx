
import React, { useEffect } from 'react';
import { useFormContext } from '@/context/FormContextC';
import EducationFormC from '@/components/education/EducationFormC';

const EducationC = () => {
  const { dispatch } = useFormContext();
  
  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 2 });
  }, [dispatch]);
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">學經歷/證照</h1>
      <EducationFormC />
    </div>
  );
};

export default EducationC;
