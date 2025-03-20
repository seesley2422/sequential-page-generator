
import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';

interface WorkExperienceListProps {
  experiences: Array<{
    id: string;
    companyName: string;
    jobTitle: string;
    jobTitleDetail: string;
    responsibilities: string;
    startDate: string;
    endDate: string;
    isPresent: boolean;
    salaryType: string;
    salaryAmount: string;
    reasonForLeaving: string;
  }>;
  onExperienceChange: (id: string, field: string, value: any) => void;
  isEndDateValid: (startDate: string, endDate: string) => boolean;
}

const WorkExperienceList: React.FC<WorkExperienceListProps> = ({ 
  experiences, 
  onExperienceChange,
  isEndDateValid
}) => {
  return (
    <>
      {experiences.map((experience, index) => (
        <WorkExperienceItem
          key={experience.id}
          experience={experience}
          index={index}
          onExperienceChange={onExperienceChange}
          isEndDateValid={isEndDateValid}
        />
      ))}
    </>
  );
};

export default WorkExperienceList;
