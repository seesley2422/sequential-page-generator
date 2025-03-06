
import React from 'react';
import JobInformation from '@/components/basic-info/JobInformation';
import PersonalInformation from '@/components/basic-info/PersonalInformation';
import ContactInformation from '@/components/basic-info/ContactInformation';

const BasicInfo = () => {
  return (
    <div className="animate-fade-in">
      <JobInformation />
      <PersonalInformation />
      <ContactInformation />
    </div>
  );
};

export default BasicInfo;
