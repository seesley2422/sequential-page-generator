
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
import { Separator } from '@/components/ui/separator';

const EducationFormC = () => {
  const { state } = useFormContext();
  
  return (
    <div className="mt-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Odd-numbered groups */}
        <div className="space-y-6">
          {/* Group 01: Highest Degree Section Header */}
          <HighestEducation />

          {/* Separator between sections */}
          <Separator className="my-6" />

          {/* Group 11: Second Highest Degree Section Header */}
          <SecondHighestEducation />
          
          {/* Separator between sections */}
          <Separator className="my-6" />
          
          {/* Group 19: Other Education Section Header */}
          <OtherEducation />
        </div>

        {/* Right Column - Even-numbered groups */}
        <div className="space-y-6">
          {/* Group 02, 04, 06, 08, 10: Details for Highest Degree */}
          <div className="md:pt-10">
            <HighestEducation.Details />
          </div>

          {/* Separator between sections */}
          <Separator className="my-6" />

          {/* Group 12, 14, 16, 18: Details for Second Highest Degree */}
          <div className="md:pt-10">
            <SecondHighestEducation.Details />
          </div>
          
          {/* Separator between sections */}
          <Separator className="my-6" />
          
          {/* Group 20, 22, 24, 26: Details for Other Education */}
          <div className="md:pt-10">
            <OtherEducation.Details />
          </div>
        </div>
      </div>

      {/* Group 29-32: Professional Certificates */}
      <ProfessionalCertificates />

      {/* Group 33-36: Certifications */}
      <Certifications />

      {/* Group 37-44: Work Experience */}
      <WorkExperience />

      {/* Group 45: Salary Expectation */}
      <SalaryExpectation />

      {/* Language Abilities */}
      <LanguageAbilities />

      {/* Other Skills */}
      <OtherSkills />
    </div>
  );
};

export default EducationFormC;
