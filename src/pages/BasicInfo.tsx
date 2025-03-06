
import React from 'react';
import JobInformation from '@/components/basic-info/JobInformation';
import PersonalInformation from '@/components/basic-info/PersonalInformation';
import ContactInformation from '@/components/basic-info/ContactInformation';
import { useFormContext } from '@/context/FormContext';
import { useEffect } from 'react';

const BasicInfo = () => {
  const { dispatch } = useFormContext();
  
  // Ensure current step is set to 1 when this component is mounted
  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 1 });
  }, [dispatch]);
  
  return (
    <div className="animate-fade-in">
      <JobInformation />
      <PersonalInformation />
      <ContactInformation />
    </div>
  );
};

export default BasicInfo;
