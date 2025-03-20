
import React, { useEffect } from 'react';
import { useFormContext } from '@/context/FormContextC';
import EducationFormC from '@/components/education/EducationFormC';
import { Button } from '@/components/ui/button';

const EducationC = () => {
  const { state, dispatch } = useFormContext();
  
  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 2 });
  }, [dispatch]);
  
  const handleNext = () => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 3 });
  };
  
  const handlePrevious = () => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 1 });
  };
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">學經歷/證照</h1>
      <EducationFormC />
      
      <div className="flex justify-end mt-8 space-x-2">
        <Button 
          variant="outline"
          onClick={handlePrevious}
          className="border-fubon-blue text-fubon-blue hover:bg-fubon-lightBlue"
        >
          上一步
        </Button>
        
        <Button 
          onClick={handleNext}
          className="bg-fubon-blue hover:bg-fubon-darkBlue text-white"
        >
          下一步
        </Button>
      </div>
    </div>
  );
};

export default EducationC;
