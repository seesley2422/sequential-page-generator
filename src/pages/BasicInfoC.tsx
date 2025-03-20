
import React, { useEffect } from 'react';
import { useFormContext } from '@/context/FormContextC';
import JobInformationC from '@/components/basic-info/JobInformationC';
import PersonalInformationC from '@/components/basic-info/PersonalInformationC';

const BasicInfoC = () => {
  const { dispatch } = useFormContext();
  
  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 1 });
  }, [dispatch]);
  
  return (
    <div className="animate-fade-in">
      <JobInformationC />
      <PersonalInformationC />
    </div>
  );
};

export default BasicInfoC;
