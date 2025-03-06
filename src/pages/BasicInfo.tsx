
import React from 'react';
import JobInformationA from '@/components/basic-info/JobInformationA';
import PersonalInformation from '@/components/basic-info/PersonalInformation';
import ContactInformation from '@/components/basic-info/ContactInformation';
import { useFormContext } from '@/context/FormContext';
import { useEffect } from 'react';

const BasicInfo = () => {
  const { dispatch } = useFormContext();
  
  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 1 });
  }, [dispatch]);
  
  return (
    <div className="animate-fade-in">
      <JobInformationA />
      <PersonalInformation />
      <ContactInformation />
    </div>
  );
};

export default BasicInfo;
