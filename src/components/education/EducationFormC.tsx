
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
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">學經歷／證照</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Odd numbered groups */}
        <div className="space-y-8">
          {/* Group 01-09: Highest Education */}
          <HighestEducation />
          
          {/* Group 19-27: Other Education */}
          <OtherEducation />
          
          {/* Group 33-36: Certifications */}
          <Certifications />
          
          {/* Group 45: Salary Expectation */}
          <SalaryExpectation />
        </div>
        
        {/* Right Column - Even numbered groups */}
        <div className="space-y-8">
          {/* Group 11-17: Second Highest Education */}
          <SecondHighestEducation />
          
          {/* Group 29-32: Professional Certificates */}
          <ProfessionalCertificates />
          
          {/* Group 37-44: Work Experience */}
          <WorkExperience />
          
          {/* Group 47-53: Language Abilities */}
          <LanguageAbilities />
          
          {/* Group 55: Other Skills */}
          <OtherSkills />
        </div>
      </div>
    </div>
  );
};

export default EducationFormC;
