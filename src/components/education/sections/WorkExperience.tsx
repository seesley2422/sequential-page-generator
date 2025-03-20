
import React from 'react';
import { useFormContext } from '@/context/FormContextC';
import { v4 as uuidv4 } from 'uuid';
import WorkExperienceHeader from './work-experience/WorkExperienceHeader';
import WorkExperienceList from './work-experience/WorkExperienceList';

const WorkExperience = () => {
  const { state, dispatch } = useFormContext();
  const { education } = state;

  const handleAddWorkExperience = () => {
    const newExperience = {
      id: uuidv4(),
      companyName: '',
      jobTitle: '',
      jobTitleDetail: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
      isPresent: false,
      salaryType: '',
      salaryAmount: '',
      reasonForLeaving: ''
    };
    
    dispatch({
      type: 'ADD_WORK_EXPERIENCE',
      payload: newExperience
    });
  };

  const handleWorkExperienceChange = (id: string, field: string, value: any) => {
    const updatedExperiences = education.workExperiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        workExperiences: updatedExperiences 
      }
    });
  };

  // Validation function to check if end date is after start date
  const isEndDateValid = (startDate: string, endDate: string) => {
    if (!startDate || !endDate) return true;
    return new Date(endDate) >= new Date(startDate);
  };

  return (
    <div className="mt-8">
      <WorkExperienceHeader onAddExperience={handleAddWorkExperience} />
      
      <WorkExperienceList
        experiences={education.workExperiences}
        onExperienceChange={handleWorkExperienceChange}
        isEndDateValid={isEndDateValid}
      />
    </div>
  );
};

export default WorkExperience;
