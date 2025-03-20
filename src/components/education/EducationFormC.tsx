import React from 'react';
import { useFormContext } from '@/context/FormContextC';
import HighestEducation from './sections/HighestEducation';
import SecondHighestEducation from './sections/SecondHighestEducation';
import OtherEducation from './sections/OtherEducation';
import ProfessionalCertificates from './sections/ProfessionalCertificates';
import Certifications from './sections/Certifications';
import WorkExperience from './sections/WorkExperience';
import SalaryExpectation from './sections/SalaryExpectation';
import LanguageAbilities from './sections/LanguageAbilities';
import OtherSkills from './sections/OtherSkills';

const EducationFormC = () => {
  const { state } = useFormContext();
  
  return (
    <div className="mt-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Highest Degree Section */}
          <HighestEducation />

          <hr className="my-6" />

          {/* Second Highest Degree Section */}
          <SecondHighestEducation />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Highest Degree (cont'd) and Second Highest Degree (cont'd) */}
          <div className="md:pt-10">
            <HighestEducation.Details />
          </div>

          <hr className="my-6" />

          <div className="md:pt-10">
            <SecondHighestEducation.Details />
          </div>
        </div>
      </div>

      {/* Other Education Section (Full Width) */}
      <OtherEducation />

      {/* Professional Certificates */}
      <ProfessionalCertificates />

      {/* Certifications */}
      <Certifications />

      {/* Work Experience */}
      <WorkExperience />

      {/* Salary Expectation */}
      <SalaryExpectation />

      {/* Language Abilities */}
      <LanguageAbilities />

      {/* Other Skills */}
      <OtherSkills />
    </div>
  );
};

export default EducationFormC;
