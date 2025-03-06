
import React from 'react';

interface RelatedPersonQuestionProps {
  questionIndex: number;
  onChange: (questionIndex: number, value: boolean) => void;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const RelatedPersonQuestion: React.FC<RelatedPersonQuestionProps> = ({
  questionIndex,
  onChange,
  onTextChange
}) => {
  return (
    <div>
      <p className="mb-2">是否擔任其他銀行及其他金融機構(含各項合作推廣單位)之內勤或外勤人員?</p>
      <div className="flex items-center space-x-4 mt-1">
        <label className="inline-flex items-center">
          <input 
            type="radio"
            name={`question${questionIndex}`}
            value="yes"
            onChange={() => onChange(questionIndex, true)}
            className="form-radio h-4 w-4 text-fubon-blue"
          />
          <span className="ml-2">是</span>
        </label>
        <label className="inline-flex items-center">
          <input 
            type="radio"
            name={`question${questionIndex}`}
            value="no"
            onChange={() => onChange(questionIndex, false)}
            className="form-radio h-4 w-4 text-fubon-blue"
            defaultChecked
          />
          <span className="ml-2">否</span>
        </label>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <input 
          type="text"
          className="fubon-input"
          placeholder="姓名"
          name="relatedPersonName"
          onChange={onTextChange}
        />
        <input 
          type="text"
          className="fubon-input"
          placeholder="公司"
          name="relatedPersonCompany"
          onChange={onTextChange}
        />
        <input 
          type="text"
          className="fubon-input"
          placeholder="部門"
          name="relatedPersonDepartment"
          onChange={onTextChange}
        />
        <input 
          type="text"
          className="fubon-input"
          placeholder="職稱"
          name="relatedPersonTitle"
          onChange={onTextChange}
        />
      </div>
    </div>
  );
};

export default RelatedPersonQuestion;
