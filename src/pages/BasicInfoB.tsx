
import React, { useEffect } from 'react';
import JobInformationB from '@/components/basic-info/JobInformationB';
import PersonalInformation from '@/components/basic-info/PersonalInformation';
import ContactInformation from '@/components/basic-info/ContactInformation';
import { useFormContext } from '@/context/FormContextB';

const BasicInfoB = () => {
  const { dispatch } = useFormContext();
  
  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 1 });
  }, [dispatch]);
  
  return (
    <div className="animate-fade-in">
      <JobInformationB />
      <PersonalInformation />
      <ContactInformation />
    </div>
  );
};

export default BasicInfoB;
