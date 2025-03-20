
import React from 'react';
import { useFormContext } from '@/context/FormContextC';
import TextareaCustom from '@/components/ui/textarea-custom';

const OtherSkills = () => {
  const { state, dispatch } = useFormContext();
  const { education } = state;

  const handleOtherSkillsChange = (value: string) => {
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        otherSkills: value 
      }
    });
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-fubon-blue border-l-4 border-fubon-blue pl-2 mb-4">
        其他專長
      </h2>
      
      <TextareaCustom
        value={education.otherSkills}
        onChange={(e) => handleOtherSkillsChange(e.target.value)}
        placeholder="請輸入其他專長"
        className="w-full"
      />
      
      <p className="mt-2 text-gray-600 italic">
        如: 電腦技能、中英輸入、駕照…等。
      </p>
    </div>
  );
};

export default OtherSkills;
